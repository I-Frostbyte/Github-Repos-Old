/* THE PROBLEM
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than or equal to 10 are 1, 1, 3, and 5.
*/

/* THE SOLUTION 
*/

function sumFibs(num) {
    let f0 = 0;
    let f1 = 1;
    let f2 = 1;

    let sum = 0;
    while (f1 <= num) {
        sum += f1;
        if (f2 <= num) sum += f2;
        [f0, f1] = [f1 + f2, f2 + (f1 + f2)];
        f2 = f0 + f1;
    }
    return sum;
  }
  
  sumFibs(4);

  module.exports = sumFibs;