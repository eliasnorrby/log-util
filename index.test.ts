import log from "./index";

describe("log", () => {
  it("should have an 'ok' method", () => {
    log.ok("I am okay");
  });

  it("should have an 'info' method", () => {
    log.info("Stay informed");
  });

  it("should have a 'skip' method", () => {
    log.skip("Skipping ahead");
  });

  it("should have a 'warn' method", () => {
    log.warn("Be warned");
  });

  it("should have a 'fail' method", () => {
    log.fail("Do not fail me");
  });
});
