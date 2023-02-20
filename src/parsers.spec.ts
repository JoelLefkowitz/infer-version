import { bumpversion, packageJSON, spago } from "./parsers";

import path from "path";

const sample = (folder: string) =>
  path.join(__dirname, "..", "samples", folder);

const valid = sample("valid");
const missing = sample("missing");
const invalid = sample("invalid");

describe(".bumpversion.cfg", () => {
  it("parses the version number from a .bumpversion.cfg file.", () => {
    expect(bumpversion(valid)).toBe("0.1.0");
  });

  it("returns null for an missing .bumpversion.cfg file.", () => {
    expect(bumpversion("_")).toBe(null);
  });

  it("returns null for an invalid .bumpversion.cfg file.", () => {
    expect(bumpversion(invalid)).toBe(null);
  });

  it("returns null for a .bumpversion.cfg file without a version field.", () => {
    expect(bumpversion(missing)).toBe(null);
  });
});

describe("package.json", () => {
  it("parses the version number from a package.json file.", () => {
    expect(packageJSON(valid)).toBe("0.1.0");
  });

  it("returns null for an missing package.json file.", () => {
    expect(packageJSON("_")).toBe(null);
  });

  it("returns null for an invalid package.json file.", () => {
    expect(packageJSON(invalid)).toBe(null);
  });

  it("returns null for a package.json file without a version field.", () => {
    expect(packageJSON(missing)).toBe(null);
  });
});

describe("spago.dhall", () => {
  it("parses the version number from a spago.dhall file.", () => {
    expect(spago(valid)).toBe("0.1.0");
  });

  it("returns null for an missing spago.dhall file.", () => {
    expect(spago("_")).toBe(null);
  });

  it("returns null for an invalid spago.dhall file.", () => {
    expect(spago(invalid)).toBe(null);
  });

  it("returns null for a spago.dhall file without a version field.", () => {
    expect(spago(missing)).toBe(null);
  });
});
