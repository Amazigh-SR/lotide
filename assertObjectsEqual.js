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

// Function that utilises eqObjects to check if two objects are equal or not
const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
}

//Test Cases to verify that the assertObjectsEqual is working as intended.
assertObjectsEqual({a:1, b:2}, {a:1, b:2})
assertObjectsEqual({a:1, b:2}, {a:1, b:3})







