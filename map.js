const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

//------------------------------------------//

const assertArraysEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

//------------------------------------------//

//Our map function will take 2 arguments -->  1) An array to map, 2) A callback function
//A dummy array to test our map function
const words = ["ground", "control", "to", "major", "tom"];

const map = function(arr, cb) {
  const results = [];
  
  for (const el of arr) {
    results.push(cb(el));
  }
  
  return results;
};

//Test Cases
// //1 - Empty Array [] as input.
// assertArraysEqual(map([], el => el[0]), []);
// //2 - the words array as input - straightforward check
// assertArraysEqual((map(words, el => el[0])), ["g", "c", "t", "m", "t"]);
// // // 3 - An array of numbers
// assertArraysEqual(map([1, 2, 3, 4], num => num * 2), [2, 4, 6, 8]);

module.exports = map;
