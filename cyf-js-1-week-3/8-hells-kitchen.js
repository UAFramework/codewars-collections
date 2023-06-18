/**
 * https://www.codewars.com/kata/57d1f36705c186d018000813
 *
 * Gordon Ramsay shouts. He shouts and swears. There may be something wrong with him.
 * Anyway, you will be given a string of four words. Your job is to turn them in to Gordon language.
 *
 * Rules:
 * Obviously the words should be in CAPS,
 * Every word should end with '!!!!',
 * Any letter 'a' or 'A' should become '@', Any other vowel should become '*'.
 *
 */
function gordon(a) {

}

const Test = require('@codewars/test-compat');

describe("Hells Kitchen", () => {
  it("Tests", () => {
    Test.assertEquals(gordon('What feck damn cake'), 'WH@T!!!! F*CK!!!! D@MN!!!! C@K*!!!!');
    Test.assertEquals(gordon('are you stu pid'), '@R*!!!! Y**!!!! ST*!!!! P*D!!!!');
    Test.assertEquals(gordon('i am a chef'), '*!!!! @M!!!! @!!!! CH*F!!!!');
  })
});