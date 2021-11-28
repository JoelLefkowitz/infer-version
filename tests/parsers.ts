import { parseBumpversion, parsePackage, parseSpago } from "../src/parsers";

import { Maybe } from "../src/utils";
import { expect } from "chai";
import path from "path";

const fixtures = path.join(__dirname, "fixtures");

const valid = path.join(fixtures, "valid");
const missing = path.join(fixtures, "missing");
const invalid = path.join(fixtures, "invalid");

const testParser = (
  name: string,
  path: string,
  parser: (root: string) => Maybe<string>
) =>
  describe(name, () => {
    it(`parses the version number from a ${path} file.`, () => {
      expect(parser(valid)).to.equal("0.1.0");
    });
    it(`returns null for an missing ${path} file.`, () => {
      expect(parser("_")).to.equal(null);
    });
    it(`returns null for an invalid ${path} file.`, () => {
      expect(parser(invalid)).to.equal(null);
    });
    it(`returns null for a ${path} file without a version field.`, () => {
      expect(parser(missing)).to.equal(null);
    });
  });

[
  {
    name: "parseBumpversion",
    path: ".bumpversion.cfg",
    parser: parseBumpversion,
  },
  {
    name: "parsePackage",
    path: "package.json",
    parser: parsePackage,
  },
  {
    name: "parseSpago",
    path: "spago.dhall",
    parser: parseSpago,
  },
].map((x) => testParser(x.name, x.path, x.parser));
