function generateShape(integer){
  return `${"+".repeat(integer)}\n`.repeat(integer).slice(0, -1);
}

//return ("+".repeat(n)+"\n").repeat(n).trim()

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertEquals( generateShape(8) , '++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++' )
  });
});
