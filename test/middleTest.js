const middle =  require("../middle");
const assertArraysEqual = require("../assertArrayEqual")

//Test Cases:
// 1 - Simple test with an array of an odd length
// console.log(middle([1, 2, 3]));
assertArraysEqual(middle([1, 2, 3]), [2]);
// 2 - Simple test with an array of an even length
// console.log(middle([1, 2, 3, 4]))
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);
// 3 - Simple test with an array of length equal to 1
// console.log(middle([1]));
assertArraysEqual(middle([1]), []);
// 4 - Simple test with an array that is empty
// console.log(middle([]));
assertArraysEqual(middle([]), []);