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

// Return an object that has a letter as the key and an array of the indices of its occurences as the value.
// We will need to remove spaces - use the helper function from the previous exercise.

//Let's create a helper function to remove spaces from the sentence input
const removeSpace = function(str) {
  return str.split(" ").join("");
};

//letterPositions Function
const letterPositions = function(sentence) {
  const results = {};
  let index = 0;
  for (const character of sentence) {
    if (!results[character]) {
      results[character] = [index];
    } else {
      results[character].push(index);
    }
    index++;
  }
  return results;
};

//Test Case
//Simple check to see if the letterPositions function is working as intended.
console.log(letterPositions(removeSpace("hello")));
const result = letterPositions(removeSpace("hello"));
//Used the assertArraysEqual to verify that the 4 letters (from the word "hello") are outputting the correct result
assertArraysEqual((result["h"]), [0]);
assertArraysEqual((result["e"]), [1]);
assertArraysEqual((result["l"]), [2, 3]);
assertArraysEqual((result["o"]), [4]);

// assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;