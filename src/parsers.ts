import fs from "fs";
import path from "path";

export const read = (path: string): string | null => {
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, "utf8");
  }

  return null;
};

export const escapeRegex = (str: string): string =>
  str.replace(/[|\\{}()[\]^$+*?.]/gu, "\\$&");

export const replaceAll = (
  str: string,
  pattern: string,
  replace: string,
): string => str.replace(new RegExp(escapeRegex(pattern), "gu"), replace);

export const selectLine = (
  path: string,
  regex: RegExp,
  filler: string[],
): string | null => {
  const matches = read(path)?.match(regex);

  return matches?.[0]
    ? filler.reduce((acc, x) => replaceAll(acc, x, ""), matches[0])
    : null;
};

export const bumpversion = (root: string): string | null =>
  selectLine(path.resolve(root, ".bumpversion.cfg"), /^current_version.*$/gmu, [
    '"',
    " ",
    "'",
    "}",
    "=",
    "current_version",
  ]);

export const spago = (root: string): string | null =>
  selectLine(path.resolve(root, "spago.dhall"), /version.*$/gmu, [
    '"',
    " ",
    "'",
    "=",
    "version",
  ]);

export const packageJSON = (root: string): string | null => {
  try {
    const json = read(path.resolve(root, "package.json"));

    if (json) {
      const parsed = JSON.parse(json) as
        | Record<string, string>
        | null
        | undefined;

      return parsed?.version ?? null;
    }
  } catch (error) {
    return null;
  }

  return null;
};
