function gordon(a) {
  const ramsayLang = a.split(" ");
  for (let i = 0; i < ramsayLang.length; i++) {
    ramsayLang[i] = ramsayLang[i] + "!!!!";
  }
  return ramsayLang
  .join(" ")
  .toUpperCase()
  .replaceAll("A", "@")
  .replaceAll(/[OIEU]/g, "*");
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Hells Kitchen", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
    assert.strictEqual(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!'); 
    assert.strictEqual(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');    
  })
});