function logicalCalc(array, operator) {
  if (operator === "AND") {
    for (let i = 0; i < array.length; i++) {
      if (!array[i]) {
        return false;
      }
    }
    return true;
  } else if (operator === "OR") {
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        return true;
      }
    }
    return false;
  } else if (operator === "XOR") {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i]) {
        count++;
      }
    }
    return count % 2 !== 0;
  }
}

const chai = require("chai");
const assert = chai.assert;

describe("Testing", function() {
  it("Fixed Tests", function() {
    assert.strictEqual(logicalCalc([true, true, true, false], "AND"), false);
    assert.strictEqual(logicalCalc([true, true, true, false], "OR"), true);
    assert.strictEqual(logicalCalc([true, true, true, false], "XOR"), true);
    assert.strictEqual(logicalCalc([true, true, false, false], "AND"), false);
    assert.strictEqual(logicalCalc([true, true, false, false], "OR"), true);
    assert.strictEqual(logicalCalc([true, true, false, false], "XOR"), false);
    assert.strictEqual(logicalCalc([true, false, false, false], "AND"), false);
    assert.strictEqual(logicalCalc([true, false, false, false], "OR"), true);
    assert.strictEqual(logicalCalc([true, false, false, false], "XOR"), true);
    assert.strictEqual(logicalCalc([true, true], "AND"), true);
    assert.strictEqual(logicalCalc([true, true], "OR"), true);
    assert.strictEqual(logicalCalc([true, true], "XOR"), false);
    assert.strictEqual(logicalCalc([false, false], "AND"), false);
    assert.strictEqual(logicalCalc([false, false], "OR"), false);
    assert.strictEqual(logicalCalc([false, false], "XOR"), false);
    assert.strictEqual(logicalCalc([false], "AND"), false);
    assert.strictEqual(logicalCalc([false], "OR"), false);
    assert.strictEqual(logicalCalc([false], "XOR"), false);
    assert.strictEqual(logicalCalc([true], "AND"), true);
    assert.strictEqual(logicalCalc([true], "OR"), true);
    assert.strictEqual(logicalCalc([true], "XOR"), true);
  });
});