function strCount(obj){
  let count = 0;
  for (let key in obj) {
    if (typeof obj[key] === "string") {
      count ++;
    } else if (typeof obj[key] === "object" & obj[key] !== null) {
      count += strCount(obj[key]);
    }
  }
  return count;
}

/*function strCount(obj){
  let filteredArr = Object.values(obj).filter(value =>
    typeof(value) === "string" || typeof(value) === "object" && value !== null);

  let arrOfStr = [];
  for (item of filteredArr) {
    if (typeof(item) === "string") {
      arrOfStr.push(item);
    } else if (typeof(item) === "object") {
      for (subitem of item) {
        if(typeof(subitem) === "string") {
          arrOfStr.push(subitem);
        }
      }
    }
  }
  return arrOfStr.length;
}*/


const chai = require("chai");
const assert = chai.assert;
chai.config.truncateThreshold=0;

describe("Example", () => {
  it("should test", () => {
    assert.strictEqual(strCount({
      first:  "1",
      second: "2",
      third:  false,
      fourth: ["anytime",2,3,4],
      fifth:  null,
      sixth:  undefined,
      seventh:{}
    }),3,"Did not count the correct number of strings. Check counting inside nested objects.");
  });
});
