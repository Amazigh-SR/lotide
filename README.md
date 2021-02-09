# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @sredouane/lotide`

**Require it:**

`const _ = require('@sredouane/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head([array])`: A function that takes an array as an argument and returns a new array with the head only (i.e. the first element of the input array).
* `tail([array])`: A function that takes an array as an argument and returns a new array with the tail of the input array only (i.e. all elements except the first one).
* `middle([array])`: A function that takes an array and returns the middle element(s) (one element if the length of the array is odd and two if the length is even) in a new array.
* `assertArrayEqual([array1], [array2])`: A function that takes 2 arrays to be compared and returns true if they are equal and false if they are not.
* `assertEqual(a, b)`: A function that takes two primitive values and returns true if they are equal and false if they are not.
* `assertObjectsEqual({obj1}, {obj2})`: A function that takes two objects and returns true if they are equal and false if they are not.
* `countLetters("string")`: A Function that takes a string and returns an object that tracks how many times a given letter in a sentence occured.
* `countOnly([array], {object})`: A function that takes an array and and an object specifying which items in the array needs to be counted; the function returns an object with the count of each item present in the array.
* `eqArrays([array1], [array2])`: A function that takes 2 arrays to be compared and returns true if they are equal and false if they are not.
* `eqObjects({obj1}, {obj2})`: A function that takes two objects and returns true if they are equal and false if they are not.
* `findKey({obj}, callback)`: A function that takes an object and a callback function and returns the first key that meets the condition specified by the callback function.
* `findKeyByValue({object}, "string")`: A function that takes an object and a string and returns the first key that matches the "string" value.
* `flatten([array])`: A function that takes an array containing nested arrays and return a "one dimensional" array.
* `letterPositions("string")`: A function that takes a "string" as an input and returns an object where each key is a letter and its associated value is an array indicating its numerical occurences (via indices) within that string.
* `map([array], callback)`: A function that takes and array and a callback function and returns a new array where each element has been the returned value of the callback function.
* `takeUntil([array], callback)`: A function that takes an array and a callback function and returns the entirety or portion of the elemnts of the input array depending on the condition specified within the call back function.
* `without([array1], [array2])`: A function that takes 2 arrays (1 containing a list of items/data and 1 containing the list of items/data to remove) and returns an array with the elements specified by the second array.

 

  
 
  
 