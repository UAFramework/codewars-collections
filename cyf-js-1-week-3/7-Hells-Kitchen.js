function gordon(a) {
  const words = a.split(" ");
  for(let i = 0; i < words.length; i++){
    words[i] = words[i] + "!!!!";
  }
  return words
    .join(" ")
    .toUpperCase()
    .replaceAll("A", "@")
    .replace(/[EUIO]/g, "*") // There is I find one more way to do it - .replace(/E|U|I|O/g, "#")
}

/* It's just for me, best practice from Codewars
  function gordon(ramsay) {
  return ramsay
    .toUpperCase()
    .replace(/\w+/g, '$&!!!!')
    .replace(/[AEIOU]/g, v => v == 'A' ? '@' : '*');
}
*/

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