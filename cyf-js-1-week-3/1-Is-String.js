/**
 * Creeate a function that takes one peremeters and checks if it's a String.
 * returns true, is string, or false if not.
 */

function isString(s) {
  if(typeof s === 'string'){
    return true;
  }
  return false;
}

const chai = require('chai');
const assert = chai.assert;

describe("test isString()", () => {
  
  it("should return false for 5", () => {
    assert.strictEqual(isString(5), false);
  });
  
  it("should return true for '5'", () => {
    assert.strictEqual(isString("5"), true);
  }); 

  it("should return true for 'abc'", () => {
    assert.strictEqual(isString("abc"), true);
  });    
  
});
