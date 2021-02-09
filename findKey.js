//AssertEqual Function for testing purposes
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

//---------------------------------------------------------------//

const findKey = function(obj, cb) {
  const keys = Object.keys(obj);
  for (const key of keys) {
    if (cb(obj[key])) {
      return key;
    }
  }
};

const stars = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};

// console.log(stars["noma"])
// console.log(findKey(stars, key => key.stars === 2));

//Test Cases
// 1 -
// assertEqual(findKey(stars, key => key.stars === 2), "noma");
// // 2 -
// assertEqual(findKey(stars, key => key.stars === 5), undefined);

module.exports = findKey;