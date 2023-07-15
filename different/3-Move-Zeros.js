// function move_zeros(arrNum, isRight = true) {
//   let zeroArr = [];
//   let nonZeroArr = [];
  
//   for (let i = 0; i < arrNum.length; i++) {
//     if (arrNum[i] === 0) {
//       zeroArr.push(arrNum[i]);
//     } else {
//       nonZeroArr.push(arrNum[i]);
//     }
//   }
  
//   if (isRight) {
//     return nonZeroArr.concat(zeroArr);
//   } else {
//     return zeroArr.concat(nonZeroArr);
//   }
// }

//First attempt
function move_zeros(arrNum, isRight = true){
  let zeroNumber = 0;
  for (let i = 0; i < arrNum.length; i++) {
    if (arrNum[i] === 0) {
      arrNum.splice(i, 1);
      if (isRight) arrNum.push(zeroNumber);
      else arrNum.unshift(zeroNumber);
    }
  }
  return arrNum;
}
console.log(move_zeros([0, 0, 0, 1], true));

/*Best practice
function move_zeros(arrNum, isRight = true) {
  let zeroes    = arrNum.filter(i => i === 0);
  let nonZeroes = arrNum.filter(i => i !== 0);
  
  return isRight ?
    nonZeroes.concat(zeroes) :
    zeroes.concat(nonZeroes);
}

const Test = require('@codewars/test-compat');

describe("Tests", () => {
  it("test", () => {
Test.assertSimilar( move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], true), [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
Test.assertSimilar( move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0], false), [0, 0, 0, 0, 12, 10, 8, 12, 7, 6, 4, 10, 12]);
Test.assertSimilar( move_zeros([12, 0, 10, 0, 8, 12, 7, 6, 0, 4, 10, 12, 0]), [12, 10, 8, 12, 7, 6, 4, 10, 12, 0, 0, 0, 0]);
  });
});*/
