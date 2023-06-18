/**
 * Write a function that will transform a number of n-digits into a 1-digit number by summing digits up, starting from the left.
 * If sum of the given numbers returns n-figure digit with length longer than 1, they should be summed up with each other again,
 * this needs to be repeated until the final result has only 1 digit.
 *
 * Examples:
 * 16  --> 1 + 6 = 7
 * 456 --> 4 + 5 + 6 = 15 --> 1 + 5 = 6
 *
 * Hint:
 * ideally this task should be completed with `recursion`
 */

function reduceNumber(n) {
  let val = [...n.toString()].map(x => +x).reduce((a,b)=>a+b);
  return n.toString().length > 1 ? reduceNumber(val) : n;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(reduceNumber(16), 7);
    Test.assertEquals(reduceNumber(456), 6);
  });
});
