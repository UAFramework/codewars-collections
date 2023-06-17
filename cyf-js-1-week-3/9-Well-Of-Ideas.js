function well(x){
  var goodLength = x.flat().filter(el => el.toLowerCase() === 'good').length;
  if (goodLength === 0) return 'Fail!';
  return (goodLength > 2) ? 'I smell a series!' : 'Publish!';
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
