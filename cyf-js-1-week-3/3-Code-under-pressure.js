function doubleInteger(i) {
  let double = i * 2;
  return double;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(doubleInteger(2), 4);
  });
});
