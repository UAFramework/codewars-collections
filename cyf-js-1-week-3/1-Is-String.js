/**
 * Creeate a function that takes one peremeters and checks if it's a String.
 * returns true, is string, or false if not.
 */

function isString(s) {
  return typeof s === 'string';
}

const Test = require('@codewars/test-compat');

describe("test isString()", () => {

  it("should return false for 5", () => {
    Test.assertEquals(isString(5), false);
  });

  it("should return true for '5'", () => {
    Test.assertEquals(isString("5"), true);
  });

  it("should return true for 'abc'", () => {
    Test.assertEquals(isString("abc"), true);
  });

});
