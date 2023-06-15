function well(x) {
  let goodIdeas = 0;
  
  for (let subArr of x) {
    for (let idea of subArr) {
      if (typeof idea === 'string' && idea.toLowerCase() === 'good') {
        goodIdeas++;
        
        if (goodIdeas > 2) {
          return 'I smell a series!';
        }
      }
    }
  }
  
  if (goodIdeas === 1 || goodIdeas === 2) {
    return 'Publish!';
  } else {
    return 'Fail!';
  }
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