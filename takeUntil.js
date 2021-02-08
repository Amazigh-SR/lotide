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
const takeUntil = function(array, callback) {
  const result = [];
  for (const element of array) {
    if (callback(element)) {
      break;
    } else result.push(element);
  }
  return result;
};

//Test Cases
const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1); //[ 1, 2, 5, 7, 2 ]
assertArraysEqual(takeUntil(data1, x => x < 0), [1, 2, 5, 7, 2 ]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(results2); // [ 'I\'ve', 'been', 'to', 'Hollywood' ]
assertArraysEqual(takeUntil(data2, x => x === ","), ['I\'ve', 'been', 'to', 'Hollywood']);

const bool = [false, false, false, true];
// const results3 = takeUntil(bool, bool => bool)
// console.log(results3); // [false, false, false];
assertArraysEqual(takeUntil(bool, bool => bool), [false, false, false]);

module.exports = takeUntil;