function well(x) {
  let goodIdeas = 0;
  
  // Iterate over each subarray in the 2-dimensional array
  for (let subArr of x) {
    for (let idea of subArr) {
      // Check if the idea is good (case-insensitive)
      if (typeof idea === 'string' && idea.toLowerCase() === 'good') {
        goodIdeas++;
        
        // Return 'I smell a series!' if there are more than 2 good ideas
        if (goodIdeas > 2) {
          return 'I smell a series!';
        }
      }
    }
  }
  
  // Return 'Publish!' if there are 1 or 2 good ideas, 'Fail!' otherwise
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