import { parseBumpversion, parsePackage, parseSpago } from "./parsers";

import { first } from "./utils";

export function version(root: string): string {
  const parsed = first([parseBumpversion, parsePackage, parseSpago], root);

  if (parsed === null) {
    throw `Could not determine the version of the project at ${root}`;
  }

  return parsed;
}
