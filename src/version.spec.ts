import { version } from "./version";
import path from "path";

const valid = path.join(__dirname, "../test/valid");

describe("version", () => {
  it("parses version numbers in priority order.", () => {
    expect(version(valid)).toBe("0.1.0");
  });

  it("raises an exception if no version number can be found.", () => {
    expect(() => version("_")).toThrow(
      "Could not determine the version of the project at _",
    );
  });
});
