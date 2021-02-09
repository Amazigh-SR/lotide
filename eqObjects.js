const { Module } = require("module");

//Function assertEqual
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ------------------------------------------------ //

//eqArrays function to check if two arrays are equal.
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

// ------------------------------------------------ //
//eqObjects Function
const eqObjects = function(object1, object2) {
  //First checking if both objects have the same number of keys
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);
  if (keys1.length !== keys2.length) return false;
  //Secondly, if the first check passed, let's check if values associated to the keys are the same for both objects
  for (const key of keys1) {
    if (!keys2.includes(key)) return false; // Let's check if a key is at least found in both objects otherwise return false
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) { // Lets check if the values of a given key are arrays, if so use eqArrays();
      if (!(eqArrays(object1[key], object2[key]))) {
        return false;
      }
    } else { //Else they are primitive values and can be compared directly
      if (object1[key] !== object2[key]) return false;
    }
  }
  return true;
};

// Testing with primitive values (as values in objects)
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// eqObjects(ab, ba); // => true

// const abc = { a: "1", b: "2", c: "3" };
// eqObjects(ab, abc); // => false

// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);

// Testing with array values
// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// eqObjects(cd, dc); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// eqObjects(cd, cd2); // => false

// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);

module.exports = eqObjects;