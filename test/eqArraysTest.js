const eqArrays = require("../eqArrays");
const assertEqual = require("../assertEqual");

// test cases:
//1 - If the arrays are of different length
assertEqual(eqArrays([1, 2], [1, 2, 3]), false);
//2 - If the arrays are empty i.e. their length equal to 0
assertEqual(eqArrays([], []), true);
//3 - An example that should fail
assertEqual(eqArrays([1, 2, 3], [8, 2, 3]), false);
//4 - An example that has different data types
assertEqual(eqArrays([1, 2, 3], ["John", "Martin", 3]), false);
assertEqual(eqArrays(["1", "2", "3"], [1, "2", "3"]), false);
//5 - A case where both arrays are equal
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);