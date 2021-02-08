const head = require("../head");
const assertEqual = require("../assertEqual");

// TEST CODE for the assertEqual function
assertEqual(head([5,6,7]), 5);
assertEqual(head([9,6,7]), 5);
assertEqual(head([5]), 5);
assertEqual(head([]), undefined);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");