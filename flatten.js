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
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(actual, expected);
    console.log(`🛑🛑🛑 Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

//------------------------------------------//

//Flatten Function
const flatten = function(arr) {
  const flatArray = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) {
        flatArray.push(arr[i][j]);
      }
    } else {
      flatArray.push(arr[i]);
    }
  }
  return flatArray;
};

console.log(flatten([1, 2, [3, 4], 5, [6]])); // => [1, 2, 3, 4, 5, 6]
console.log(flatten([]));
console.log(flatten([1, 2, [3, 4], [5, 2, 5, 8], [6]]));
console.log(flatten([1, 2, [3, 4], [5, 2, "Hola", "hello"], [6]]));

//Test Cases:
//1 -  Empty Array
assertArraysEqual(flatten([]), []);
//2 - array of empty arrays
assertArraysEqual(flatten([[], [], []]), []);
//3 array of arrays with different data types
assertArraysEqual(flatten([1, 2, [3, 4], [5, 2, "Hola", "hello"], [6]]), [1, 2, 3, 4, 5, 2, "Hola", "hello", 6]);

module.exports = flatten;




