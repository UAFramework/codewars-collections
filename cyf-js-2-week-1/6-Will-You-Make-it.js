const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  if (distanceToPump <= mpg * fuelLeft) {
    return true
  } else {
    return false;
  }
};

//return distanceToPump/mpg <= fuelLeft

const assert = require("chai").assert;

describe("zeroFill", function() {
  it("Sample Tests", function() {
    assert.equal(zeroFuel(50, 25, 2), true);
    assert.equal(zeroFuel(100, 50, 1), false);
  });
});