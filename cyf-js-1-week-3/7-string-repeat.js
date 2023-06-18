/**
 * https://www.codewars.com/kata/57a0e5c372292dd76d000d7e
 * Write a function that accepts an integer n and a string s as parameters,
 * and returns a string of s repeated exactly n times.
 */
function repeatStr (n, s) {

}

const Test = require('@codewars/test-compat');

describe("Tests", function() {
  it ("Basic tests", function() {
    Test.assertEquals(repeatStr(3, "*"), "***");
    Test.assertEquals(repeatStr(5, "#"), "#####");
    Test.assertEquals(repeatStr(2, "ha "), "ha ha ");
  });
});
