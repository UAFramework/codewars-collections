/**
 * https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad
 *
 * Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.
 * invertArray([1,2,3,4,5]) == [-1,-2,-3,-4,-5]
 * invertArray([1,-2,3,-4,5]) == [-1,2,-3,4,-5]
 * invertArray([]) == []
 */
function invertArray(array) {

}

const Test = require('@codewars/test-compat');

describe("Invert array values",() => {

  const norm = arr => arr.map(n => n === -0 ? 0 : n);

  it("Basic Tests", () => {
    Test.assertDeepEquals(norm(invertArray([1,2,3,4,5])), [-1,-2,-3,-4,-5]);
    Test.assertDeepEquals(norm(invertArray([1,-2,3,-4,5])), [-1,2,-3,4,-5]);
    Test.assertDeepEquals(norm(invertArray([])), []);
    Test.assertDeepEquals(norm(invertArray([0])), [0]);
  });
});
