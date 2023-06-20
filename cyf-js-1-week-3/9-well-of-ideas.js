function well(x){
  let goodCount = 0;
  for (let row of x) {
    for (let column of row) {
      if (typeof column === 'string' && column.toLowerCase() === 'good') {
        goodCount++;
      }
    }
  }
  return goodCount > 2 ? "I smell a series!" : goodCount === 1 || goodCount === 2 ? "Publish!" : "Fail!";
}  


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Well of Ideas - Harder Version", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(well([['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad'], ['bad', 'bAd', 'bad']]), 'Fail!');
    assert.deepEqual(well([['gOOd', 'bad', 'BAD', 'bad', 'bad'], ['bad', 'bAd', 'bad'], ['GOOD', 'bad', 'bad', 'bAd']]), 'Publish!');
    assert.deepEqual(well([['gOOd', 'bAd', 'BAD', 'bad', 'bad', 'GOOD'], ['bad'], ['gOOd', 'BAD']]), 'I smell a series!');
  });
});