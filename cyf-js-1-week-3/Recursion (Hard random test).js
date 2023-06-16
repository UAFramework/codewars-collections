function digitalRoot(n) {
 let ns = n.toString();
 let i = 0;
  let digRoot = 0;
  while (i < ns.length) {  
  digRoot += digRoot + ns.charAt(i);
   i++;
 }
  return digRoot;
}




const chai = require("chai");
const assert = chai.assert;

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual( digitalRoot(16), 7 )
    assert.strictEqual( digitalRoot(456), 6 )
  });
});
