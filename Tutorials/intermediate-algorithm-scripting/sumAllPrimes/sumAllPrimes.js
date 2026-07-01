/* THE PROBLEM 
A prime number is a whole number greater than 1 with exactly two divisors: 1 and itself. For example, 2 is a prime number because it is only divisible by 1 and 2. In contrast, 4 is not prime since it is divisible by 1, 2 and 4.

Rewrite sumPrimes so it returns the sum of all prime numbers that are less than or equal to num.
*/

/* THE SOLUTION 
*/

function sumPrimes(num) {
  let isPrime = Array(num + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (isPrime[i]) {
      for (let j = i * i; j <= num; j += i)
        isPrime[j] = false;
    }
  }

  return isPrime.reduce(
    (sum, prime, index) => prime ? sum + index : sum, 0
  );
}
  
  sumPrimes(10);

  module.exports = sumPrimes;