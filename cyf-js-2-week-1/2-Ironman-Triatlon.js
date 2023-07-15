function iTri(s){
 let fullDistance = 140.6;
    if (s === 0) {
      return 'Starting Line... Good Luck!';
  } else if (s < 2.4) {
      return {'Swim' : `${(fullDistance - s).toFixed(2)} to go!`};
  } else if (s < 114.2) {
      return {'Bike' : `${(fullDistance - s).toFixed(2)} to go!`};
  } else if (s < 130) {
      return {'Run' : `${(fullDistance - s).toFixed(2)} to go!`};
  } else  if (s < 140.6) {
      return {'Run' : 'Nearly there!'};       
  } else if (s >= 140.6) {
      return "You\'re done! Stop running!"
  }
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