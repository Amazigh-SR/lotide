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

const middle = function(arr) {
  const midArrNum = [];
  //Logic if the array is empty or has only one element
  if (arr.length <= 1) {
    return [];
  }
  //Logic if the array's length is odd.
  if (arr.length % 2 !== 0) {
    midArrNum.push(arr[Math.floor((arr.length / 2))]);
    return midArrNum;
  //Logic if the array's length is even
  } else {
    const num1 = arr[(arr.length / 2) - 1];
    const num2 = arr[(arr.length / 2)];
    midArrNum.push(num1, num2);
    return midArrNum;
  }
};

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
