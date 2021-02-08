//Requiring both AssertEqual and tail functions
const tail = require("../tail");
const assertEqual = require("../assertEqual");

// --------------------------------------------------- //
// Test Cases:

//1 - Check the returned array elements by checking its length and elements and compare them to the expected values
//This allows us to still use assertEqual indirectly to check that the returning array is correct.
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs

//2 - Checking whether the original array has been modified or not.
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
// checking if the original array has been modified after it has been used in the head function.
assertEqual(words.length, 3); // original array should still have 3 elements!

//3 - Check for unique cases such an array with a length of 1 or an empty array (they should both return an empty array)
//We can check the above statement by ensuring that both returned arrays have a length of 0.
const emptyInput = tail([]);
assertEqual(emptyInput.length, 0);

const oneInput = tail(["hello"]);
assertEqual(oneInput.length, 0);