/**
 * https://www.codewars.com/kata/53da3dbb4a5168369a0000fe
 * Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.
 */

function evenOrOdd(number) {

}

const Test = require('@codewars/test-compat');

describe("Sample tests",() => {

  it("2 is even", () => {
    Test.assertEquals(evenOrOdd(2), "Even");
  });
  it("7 is odd", () => {
    Test.assertEquals(evenOrOdd(7), "Odd");
  });
  it("-42 is even", () => {
    Test.assertEquals(evenOrOdd(-42), "Even");
  });
  it("-7 is odd", () => {
    Test.assertEquals(evenOrOdd(-7), "Odd");
  });
  it("0 is even", () => {
    Test.assertEquals(evenOrOdd(0), "Even");
  });
});
