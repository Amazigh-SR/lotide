//AssertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//head Function

const head = function(arr) {
  return arr[0];
};

assertEqual(head([5,6,7]), 5);
assertEqual(head([9,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");