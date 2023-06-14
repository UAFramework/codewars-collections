function doubleInteger(i) {
  i = i * 2;
  return i;
}

const chai = require('chai');
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
assert.strictEqual(doubleInteger(2), 4);
  });
});