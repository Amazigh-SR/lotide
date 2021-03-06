const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//--------------------------------------------------//

const findKeyByValue = function(object, value) {
  const keys = Object.keys(object);
  for (const key of keys) {
    if (object[key] === value) {
      return key;
    }
  }
};


// Test Cases
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// assertEqual((findKeyByValue(bestTVShowsByGenre, "The Wire")), "drama");
// assertEqual((findKeyByValue(bestTVShowsByGenre, "That '70s Show")), undefined);
// assertEqual((findKeyByValue({}, "That '70s Show")), undefined);

module.exports = findKeyByValue;