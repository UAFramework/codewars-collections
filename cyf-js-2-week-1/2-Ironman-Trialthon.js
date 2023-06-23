function iTri(s){
 const triathlonDistance = 140.60;
 let triathlonResult = {};
  if (s === 0) {
    return "Starting Line... Good Luck!";
  } else if (s > 0 && s <= 2.4) {
    let triathlonResult = {'Swim':(triathlonDistance-s).toFixed(2) + " " + 'to go!'};
    return triathlonResult;
  } else if (s > 2.4 && s <= 114.4) {
    let triathlonResult = {'Bike':(triathlonDistance-s).toFixed(2) + " " + 'to go!'};
    return triathlonResult;
  } else if (s > 114.4 && s < 130.6) {
    let triathlonResult = {'Run': (triathlonDistance-s).toFixed(2) + " " + 'to go!'};
    return triathlonResult;
  } else if (s >= 130.6 && s < 140.6) {
    let triathlonResult = {'Run':'Nearly there!'};
    return triathlonResult;
  } else if (s >= 140.6) {
    return "You're done! Stop running!";
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