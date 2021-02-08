const assertArraysEqual = require("../assertArrayEqual");


//test Cases
assertArraysEqual([1, 2, 3], ["1", 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [1, 2]);
assertArraysEqual(["John", "Tony"], ["John", "Tony"]);
assertArraysEqual([], []);