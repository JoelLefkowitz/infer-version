// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./main.d.ts" />

import fs from "fs";
import replaceAll from "string.prototype.replaceall";

replaceAll.shim();

export type Maybe<T> = T | null;

export const first = <T, U>(arr: ((x: T) => Maybe<U>)[], x: T): Maybe<U> =>
  arr.reduce((acc: Maybe<U>, f: (x: T) => Maybe<U>) => acc ?? f(x), null);

export const strip = (arr: string[], str: Maybe<string>): Maybe<string> =>
  str ? arr.reduce((acc, x) => acc.replaceAll(x, ""), str) : null;

export const pick = (path: string, regex: RegExp): Maybe<string> =>
  fs.readFileSync(path, "utf8").toString().match(regex)?.pop() ?? null;
