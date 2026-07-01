/* THE PROBLEM 
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.

Check the assertion tests for examples.
*/

/* THE SOLUTION 

*/

function uniteUnique() {
    return [...arguments]
    .flat()
    .filter((item, ind, arr) => arr.indexOf(item) === ind);
  }
  
  uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

  module.exports = uniteUnique;



















/*
// console.log(arguments);
    let concatArr = arguments.reduce((acc, val) => acc.concat(val), []);
    let newArr = [... new Set(arguments)];
    console.log(concatArr);
    return newArr;
*/