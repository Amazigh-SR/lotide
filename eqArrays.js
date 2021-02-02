const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


const eqArrays = function(arr1, arr2) {
  if(arr1.length !== arr2.length) {
    return false;
  }

  for(let i = 0; i < arr1.length; i++) {
    if(arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};




//Additional test cases:
//1 - If the arrays are of different length
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
//2 - If the arrays are empty i.e. their length equal to 0
assertEqual(eqArrays([], []), true);
//3 - An example that should fail
assertEqual(eqArrays([1, 2, 3], [8, 2, 3]), false);
//4 - An example that has different data types
assertEqual(eqArrays([1, 2, 3], ["John", "Martin", 3]), false);
//5 - A case where both arrays are equal
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays(["1", "2", "3"], [1, "2", "3"]), false);