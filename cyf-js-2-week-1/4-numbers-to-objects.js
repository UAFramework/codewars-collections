function numObj(s){
  let arrayOfObjects = [];
  
  for (let i = 0; i < s.length; i++) {
    let key = String(s[i]);
    let value = String.fromCharCode(s[i]);
    let obj = {};
    obj[key] = value;
    arrayOfObjects.push(obj);
  }
  return arrayOfObjects;
}

const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Numbers  to Objects", () => {
  it("Testing for fixed tests", () => {
    assert.deepEqual(numObj([118,117,120]),[{'118':'v'}, {'117':'u'}, {'120':'x'}]);
    assert.deepEqual(numObj([101,121,110,113,113,103]),[{'101':'e'}, {'121':'y'}, {'110':'n'}, {'113':'q'}, {'113':'q'}, {'103':'g'}]);
  });
});