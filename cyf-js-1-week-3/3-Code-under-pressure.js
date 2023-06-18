/**
 * Code as fast as you can! You need to double the integer and return it.
 * https://www.codewars.com/kata/53ee5429ba190077850011d4
 */
function doubleInteger(i) {
  return +i*2;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(doubleInteger(2), 4);
  });
});
