function iTri(s){
  let total = 2.4 + 112 + 26.2;
  if (s === 0) return 'Starting Line... Good Luck!';
  if (s <= 2.4) return {'Swim': `${(total - s).toFixed(2)} to go!`};
  if (s <= 114.4) return {'Bike': `${(total - s).toFixed(2)} to go!`};
  if (s <= 127) return {'Run': `${(total - s).toFixed(2)} to go!`};
  if (s < total) return {'Run': `Nearly there!`};
  return "You're done! Stop running!";
}



const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Ironman Triathlon", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(iTri(36),{'Bike':'104.60 to go!'});
    assert.deepEqual(iTri(103.5),{'Bike':'37.10 to go!'});
    assert.deepEqual(iTri(0),'Starting Line... Good Luck!');
    assert.deepEqual(iTri(2),{'Swim':'138.60 to go!'});
  });
});
