import { Maybe, pick, strip } from "./utils";

import fs from "fs";
import path from "path";

export function parseBumpversion(root: string): Maybe<string> {
  const source = path.resolve(root, ".bumpversion.cfg");

  if (!fs.existsSync(source)) {
    return null;
  }

  return strip(
    ["current_version", "=", " "],
    pick(source, new RegExp(/^current_version.*$/gm))
  );
}

export function parseSpago(root: string): Maybe<string> {
  const source = path.resolve(root, "spago.dhall");

  if (!fs.existsSync(source)) {
    return null;
  }

  return strip(
    ["version", "=", " ", ", ", "'", '"'],
    pick(source, new RegExp(/version.*$/gm))
  );
}

export function parsePackage(root: string): Maybe<string> {
  try {
    const source = path.resolve(root, "package.json");
    return JSON.parse(fs.readFileSync(source, "utf8"))?.version ?? null;
  } catch (error) {
    return null;
  }
}
