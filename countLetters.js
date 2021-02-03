// assertEqual Function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

// -------------------------------------------------- //

//Let's create a helper function to remove spaces from the sentence input
const removeSpace = function(str) {
  return str.split(" ").join("");
};

//Function that tracks how many times a given letter in a sentence occurs.
const countLetters = function(sentence) {
  const letterOccur = {};
  for (const character of sentence) {
    if (letterOccur[character]) {
      letterOccur[character] += 1;
    } else {
      letterOccur[character] = 1;
    }
  }
  return letterOccur;
};

//Test Cases:
// 1 - Simple test to check if a single word (without spaces) as an input works as intended
console.log(countLetters(removeSpace("lhl"))); // { l: 2, h: 1 } --> Works great
// 2 - Simple test to check is a sentence (includes spaces) as an input works as intended
console.log(countLetters(removeSpace("lhl is an amazing bootcamp"))); // { l: 2, h: 1 } --> Works great

// Let's check using our assertEqual function
// First we need to capture the object
const results = (countLetters(removeSpace("lhl")));
assertEqual(results["l"], 2); // Checking for the number of occurences for the letter l.
assertEqual(results["h"], 1); // Checking for the number of occurences for the letter l.

