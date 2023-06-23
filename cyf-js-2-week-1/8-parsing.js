function getStatus(isBusy) {
  msg = (isBusy ? "busy" : "available");
  let objMsg = {};
  objMsg['status'] = msg;
  return objMsg;
  
}

const chai = require('chai');
const assert = chai.assert;
chai.config.truncateThreshold = 0;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(getStatus(true).status, "busy");
  });
});
