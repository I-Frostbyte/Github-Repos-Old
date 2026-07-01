/* THE PROBLEM
Return true if the given string is a palindrome. Otherwise, return false.

A palindrome is a word or sentence that's spelled the same way both forward and backward, ignoring punctuation, case, and spacing.

Note: You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) and turn everything into the same case (lower or upper case) in order to check for palindromes.

We'll pass strings with varying formats, such as racecar, RaceCar, and race CAR among others.

We'll also pass strings with special symbols, such as 2A3*3a2, 2A3 3a2, and 2_A3*3#A2.


*/

/* THE SOLUTION
1 - To pass the last test case, we can use two Regular Expressions:

/[^A-Za-z0–9]/g  or

/[\W_]/g

2 - \W removes all non-alphanumeric characters:

\W matches any non-word character
\W is equivalent to [^A-Za-z0–9_]
\W matches anything that is not enclosed in the brackets
What does that mean?

[^A-Z] matches anything that is not enclosed between A and Z

[^a-z] matches anything that is not enclosed between a and z

[^0-9] matches anything that is not enclosed between 0 and 9

[^_] matches anything that does not enclose _

3 - But in our test case, we need palindrome(“0_0 (: /-\ :) 0–0”) to return true, which means “_(: /-\ :)–” has to be matched.

We will need to add “_” to pass this specific test case.

We now have “\W_”
We will also need to add the g flag for global search.

We finally have “/[\W_]/g”
/[\W_]/g was used for pure demonstrative purpose to show how RegExp works. /[^A-Za-z0–9]/g is the easiest RegExp to choose.

4 - Check for Palindromes With Built-In Functions
For this solution, we will use several methods:

The toLowerCase() method to return the calling string value converted to lowercase.
The replace() method to return a new string with some or all matches of a pattern replaced by a replacement. We will use one of the RegExp we just created earlier.
The split() method splits a String object into an array of strings by separating the string into sub strings.
The reverse() method reverses an array in place. The first array element becomes the last and the last becomes the first.
The join() method joins all elements of an array into a string.

*/

function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, '');
  // console.log(lowRegStr);
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  return reverseStr === lowRegStr;
}
  
  palindrome("eye");

  module.exports = palindrome;





































/* 
// Step 1. Lowercase the string and use the RegExp to remove unwanted characters from it
  var re = /[\W_]/g; // or var re = /[^A-Za-z0-9]/g;
  
  var lowRegStr = str.toLowerCase().replace(re, '');
  // str.toLowerCase() = "A man, a plan, a canal. Panama".toLowerCase() = "a man, a plan, a canal. panama"
  // str.replace(/[\W_]/g, '') = "a man, a plan, a canal. panama".replace(/[\W_]/g, '') = "amanaplanacanalpanama"
  // var lowRegStr = "amanaplanacanalpanama";
     
  // Step 2. Use the same chaining methods with built-in functions from the previous article 'Three Ways to Reverse a String in JavaScript'
  var reverseStr = lowRegStr.split('').reverse().join(''); 
  // lowRegStr.split('') = "amanaplanacanalpanama".split('') = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].reverse() = ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"]
  // ["a", "m", "a", "n", "a", "p", "l", "a", "n", "a", "c", "a", "n", "a", "l", "p", "a", "n", "a", "m", "a"].join('') = "amanaplanacanalpanama"
  // So, "amanaplanacanalpanama".split('').reverse().join('') = "amanaplanacanalpanama";
  // And, var reverseStr = "amanaplanacanalpanama";
   
  // Step 3. Check if reverseStr is strictly equals to lowRegStr and return a Boolean
  return reverseStr === lowRegStr; // "amanaplanacanalpanama" === "amanaplanacanalpanama"? => true
*/