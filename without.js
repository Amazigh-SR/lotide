// eqArrays Function
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
//PrettyPrint is a  function that allows the array elements to be shown as strings when they are printed from the assertArrayEqual function
const prettyPrint = function(arr) {
  let prettyArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!Number.isInteger(arr[i])) { // I need to find an alternative tho because Number.isInteger does not consider floats.
      prettyArr.push("\"" + arr[i] + "\""); // "1"
    } else prettyArr.push(arr[i]);
  }
  return prettyArr;
};

//------------------------------------------//
//assertArrayEqual Function
const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${prettyPrint(actual)} === ${prettyPrint(expected)}`); //You could ignore the === part
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${prettyPrint(actual)} !== ${prettyPrint(expected)}`); //You could ignore the === part
  }
};

//------------------------------------------//

//without Function
const without = function(source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!(itemsToRemove.includes(source[i]))) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

//Test Cases
// // 1 - Check that the original array is not modified
// const words = ["hello", "world", "lighthouse"];
// without(words, ["lighthouse"]);
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);
// // 2 - Check the case where the itemsToRemove array's length is greater than the source array
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3", 4, "2"]), ["1"]);
// // 3 - Check the case where the arrays are empty
// assertArraysEqual(without([], []), []);
// 4 - Check the case for type Coercion i.e.
// assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

