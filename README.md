## Binary Search NPM Package

A simple npm package for performing binary search on arrays.

## Installation

You can install this package via npm:

```bash
npm install binary-search-js


const binarySearch = require('binary-search-js');

// Example usage with a sorted array of numbers
const sortedArray = [1, 3, 5, 7, 9, 11, 13];
const target = 7;
const index = binarySearch(sortedArray, target);

if (index !== -1) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found in the array`);
}


API
binarySearch(array, target)
Searches for the target value within the sorted array using the binary search algorithm.

array: The sorted array to search within.
target: The value to search for within the array.
Returns the index of the target value if found, otherwise returns -1.

Contributing
Contributions are welcome! Please feel free to submit issues or pull requests if you find any bugs or have any suggestions for improvements.