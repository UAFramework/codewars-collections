function doubleInteger(i) {
  // i will be an integer. Double it and return it.
  return +i*2;
}

const Test = require('chai');

describe("Tests", () => {
  it("test", () => {
Test.assert.strictEqual(doubleInteger(2), 4);
  });
});
