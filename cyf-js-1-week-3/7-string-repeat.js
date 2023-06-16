function repeatStr (n, s) {
  let string = '';
  let string2 = '';
  for (let i = 0; i < n; i++) {
    string += string2.concat(s);
    string2 = '';
  }
  return string;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Tests", function() {
  it ("Basic tests", function() {
    assert.strictEqual(repeatStr(3, "*"), "***");
    assert.strictEqual(repeatStr(5, "#"), "#####");
    assert.strictEqual(repeatStr(2, "ha "), "ha ha ");
  });
});



//Much easier to do with string.repeat(n);