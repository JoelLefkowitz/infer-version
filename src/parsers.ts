import fs from "fs";
import path from "path";

export const strip = (arr: string[], str: string): string | null =>
  arr.reduce((acc, x) => acc.replaceAll(x, ""), str);

export const read = (path: string): string | null => {
  if (fs.existsSync(path)) {
    return fs.readFileSync(path, "utf8");
  }

  return null;
};

export const selectLine = (
  path: string,
  regex: RegExp,
  filler: string[]
): string | null => {
  const matches = read(path)?.match(regex);
  return matches?.[0] ? strip(filler, matches[0]) : null;
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
