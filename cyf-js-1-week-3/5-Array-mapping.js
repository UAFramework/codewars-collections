/**
 * Make the double() function return a new array with each value twice as large as the corresponding value in the passed in array. Your solution must use the map() function of the built-in javascript Array object. If you're not familiar with map(), reading over the documentation may help.
 *
 */

function doubleWithMap(array) {
  return array.map(x => x * 2);
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
    Test.assertDeepEquals(doubleWithMap([1,2,3,4,5]), [2,4,6,8,10]);
    Test.assertDeepEquals(doubleWithMap([71,-548,12.3,31415]), [142,-1096,24.6,62830]);
  });
});