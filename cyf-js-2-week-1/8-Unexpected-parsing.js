function getStatus(isBusy) {
  return { status: isBusy ? "busy" : "available" };
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getStatus(true).status, "busy");
  });
});
