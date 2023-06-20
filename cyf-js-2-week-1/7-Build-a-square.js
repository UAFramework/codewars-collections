function generateShape(integer) {
  return ("+".repeat(integer) + "\n").repeat(integer).trim();

  //   const fill = (val, glue) => Array(integer).fill(val).join(glue);
  //   return fill(fill("+", ""), "\n");
  //   var string = Array(integer).fill("+").join("");
  //   return Array(integer).fill(string, 0, integer).join("\n");
}

const Test = require("@codewars/test-compat");

describe("Tests", () => {
  it("test", () => {
    Test.assertEquals(
      generateShape(8),
      "++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++\n++++++++"
    );
  });
});
