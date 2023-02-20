import { bumpversion, packageJSON, spago } from "./parsers";

export const version = (root: string): string => {
  const parsed = [bumpversion, spago, packageJSON].reduce(
    (acc: string | null, f: (x: string) => string | null) => acc ?? f(root),
    null
  );

  if (parsed) {
    return parsed;
  }

  throw new Error(`Could not determine the version of the project at ${root}`);
};
