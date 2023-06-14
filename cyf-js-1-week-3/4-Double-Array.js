function double(array) {
    const doubleArray = array.map(x => x * 2);
    return doubleArray;
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
var test1 = [1,2,3,4,5];
var test2 = [71,-548,12.3,31415];

Test.assertSimilar(double(test1), [2,4,6,8,10]);
Test.assertSimilar(double(test2), [142,-1096,24.6,62830]);

  });
});