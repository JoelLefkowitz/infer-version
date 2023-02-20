import path from "path";
import { version } from "./version";

const valid = path.join(__dirname, "..", "samples", "valid");

describe("version", () => {
  it("parses version numbers in priority order.", () => {
    expect(version(valid)).toBe("0.1.0");
  });

  it("raises an exception if no version number can be found.", () => {
    expect(() => version("_")).toThrow(
      "Could not determine the version of the project at _"
    );
  });
});
