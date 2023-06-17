function gordon(a){
    return a.replace(/\w+/g, '$&!!!!').replace(/[aeiou]/g, v => v == 'a' ? '@' : '*').toUpperCase();
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
