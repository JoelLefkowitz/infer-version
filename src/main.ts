/// <reference path="./main.d.ts" />

import fs from 'fs';
import path from 'path';
import replaceAll from 'string.prototype.replaceall';

replaceAll.shim();

export type Maybe<T> = T | null;

export const first = <T, U>(arr: ((x: T) => Maybe<U>)[], x: T): Maybe<U> =>
  arr.reduce((acc: Maybe<U>, f: (x: T) => Maybe<U>) => acc ?? f(x), null);

export const strip = (arr: string[], str: Maybe<string>): Maybe<string> =>
  str ? arr.reduce((acc, x) => acc.replaceAll(x, ''), str) : null;

export const pick = (path: string, regex: RegExp): Maybe<string> =>
  fs.readFileSync(path, 'utf8').toString().match(regex)?.pop() ?? null;

export function parseBumpversion(root: string): Maybe<string> {
  const source = path.resolve(root, '.bumpversion.cfg');
  if (!fs.existsSync(source)) {
    return null;
  }

  return strip(
    ['current_version', '=', ' '],
    pick(source, new RegExp(/^current_version.*$/gm))
  );
}

export function parsePackage(root: string): Maybe<string> {
  try {
    const source = path.resolve(root, 'package.json');
    return JSON.parse(fs.readFileSync(source, 'utf8'))?.version ?? null;
  } catch (error) {
    return null;
  }
}

export function version(root: string): string {
  const parsed = first([parseBumpversion, parsePackage], root);

  if (parsed === null) {
    throw `Could not determine the version of the project at ${root}`;
  }

  return parsed;
}
