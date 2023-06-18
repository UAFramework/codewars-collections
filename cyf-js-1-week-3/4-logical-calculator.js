/**
 * https://www.codewars.com/kata/57096af70dad013aa200007b
 *
 * Given an array of Boolean values and a logical operator,
 * return a Boolean result based on sequentially applying the operator to the values in the array.
 *
 * Example:
 *
 * booleans = [True, True, False], operator = "AND"
 *  True AND True -> True
 *  True AND False -> False
 * return False
 *
 * Input
 * - an array of Boolean values (1 <= array_length <= 50)
 * - a string specifying a logical operator: "AND", "OR", "XOR"
 *
 * Output
 * - A Boolean value (True or False).
 */

function logicalCalc(array, op){
    var operators = {
        AND: '&&',
        OR: '||',
        XOR: '^',
    };
    return Boolean(eval(array.join(operators[op])));
}

const Test = require('@codewars/test-compat');

describe("Testing", function() {
  it("Logical Tests", function() {
    Test.assertEquals(logicalCalc([true, true, true, false], "AND"), false);
    Test.assertEquals(logicalCalc([true, true, true, false], "OR"), true);
    Test.assertEquals(logicalCalc([true, true, true, false], "XOR"), true);
    Test.assertEquals(logicalCalc([true, true, false, false], "AND"), false);
    Test.assertEquals(logicalCalc([true, true, false, false], "OR"), true);
    Test.assertEquals(logicalCalc([true, true, false, false], "XOR"), false);
    Test.assertEquals(logicalCalc([true, false, false, false], "AND"), false);
    Test.assertEquals(logicalCalc([true, false, false, false], "OR"), true);
    Test.assertEquals(logicalCalc([true, false, false, false], "XOR"), true);
    Test.assertEquals(logicalCalc([true, true], "AND"), true);
    Test.assertEquals(logicalCalc([true, true], "OR"), true);
    Test.assertEquals(logicalCalc([true, true], "XOR"), false);
    Test.assertEquals(logicalCalc([false, false], "AND"), false);
    Test.assertEquals(logicalCalc([false, false], "OR"), false);
    Test.assertEquals(logicalCalc([false, false], "XOR"), false);
    Test.assertEquals(logicalCalc([false], "AND"), false);
    Test.assertEquals(logicalCalc([false], "OR"), false);
    Test.assertEquals(logicalCalc([false], "XOR"), false);
    Test.assertEquals(logicalCalc([true], "AND"), true);
    Test.assertEquals(logicalCalc([true], "OR"), true);
    Test.assertEquals(logicalCalc([true], "XOR"), true);
  });
});