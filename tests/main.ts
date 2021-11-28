import { expect } from "chai";
import path from "path";
import { version } from "../src/main";

const valid = path.join(__dirname, "fixtures", "valid");

describe("version", () => {
  it("parses version numbers in priority order.", () => {
    expect(version(valid)).to.equal("0.1.0");
  });
  it("raises an exception if no version number can be found.", () => {
    expect(() => version("_")).to.throw(
      "Could not determine the version of the project at _"
    );
  });
});
