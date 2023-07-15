function highestRank(arr){
  let sortedNumbers = {};
  for (let i = 0; i < arr.length; i++) {
    if (sortedNumbers[arr[i]]) {
      sortedNumbers[arr[i]]++;
    } else {
      sortedNumbers[arr[i]] = 1;
    }
  }
  
  let highestKey = Object.keys(sortedNumbers).reduce(function(acc, key) {
    if(sortedNumbers[acc] > sortedNumbers[key]) {
      return acc;
    } else if(sortedNumbers[acc] === sortedNumbers[key] && acc > key) {
      return acc;
    } else {
      return key;
    }
  }, Object.keys(sortedNumbers)[0]);
  
  return +highestKey;
}

/*Best Practice
function highestRank(arr){
  return arr.sort((a,b)=>arr.filter(i=>i===b).length - arr.filter(i=>i===a).length)[0];
}
*/

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Sample tests", function() {
  it("should test", function() {
    var arr = [12, 10, 8, 12, 7, 6, 4, 10, 12];
    assert.strictEqual( highestRank(arr), 12);
  });
});
