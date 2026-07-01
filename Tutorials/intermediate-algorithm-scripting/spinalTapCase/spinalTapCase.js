/* THE PROBLEM
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {

    return str
              .split(/\s+|_+|(?=[A-Z])/g)
              .join("-")
              .toLowerCase();
}
module.exports = spinalCase;
  
  spinalCase('This Is Spinal Tap');

/*
str
              .replace(/[A-Z]/g, "-" + /[A-Z]/g)
              .toLowerCase()
              .replace(/\s+/g, "-");
*/


/* CAME REAL CLOSE WITH THIS ONE - FAILED ONE TEST
 return ((/\s/g).test(str) ? str
              .toLowerCase()
              .split(/(?=[A-Z])/).join(" ")
              .replace(/\s+/g, "-")
              : (/_+/g).test(str) ? str
              .toLowerCase()
              .replace(/_+/g, "-")
              : str
              .split(/(?=[A-Z])/).join(" ")
              .toLowerCase()
              .replace(/\s+/g, "-")
            );
*/

/* WORKING SOLUTION ACHIEVED WITH HELP OF HINTS FROM FREECODECAMP
 return str
              .replace(/([a-z])([A-Z])/g, "$1 $2")
              .replace(/\s+|_+/g, "-")
              .toLowerCase();
*/

/* COMPLETE SOLUTION FROM FREECODECAMP
function spinalCase(str) {
  // Create a variable for the white space and underscores.
  var regex = /\s+|_+/g;

  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");

  // Replace space and underscore with -
  return str.replace(regex, "-").toLowerCase();
}

// test here
spinalCase("This Is Spinal Tap");
Code Explanation
regex contains the regular expression /\s+|_+/g, which will select all white spaces and underscores.
The first replace() puts a space before any encountered uppercase characters in the string str so that the spaces can be replaced by dashes later on.
While returning the string, another replace() replaces spaces and underscores with dashes using regex.
*/

/* THE BEST SOLUTION FROM FREECODECAMP BY FAR
function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}
Code Explanation
Split the string at one of the following conditions (converted to an array)
a whitespace character [\s] is encountered
underscore character [_] is encountered
or is followed by an uppercase letter [(?=[A-Z])]
Join the array using a hyphen (-)
Lowercase the whole resulting string
*/