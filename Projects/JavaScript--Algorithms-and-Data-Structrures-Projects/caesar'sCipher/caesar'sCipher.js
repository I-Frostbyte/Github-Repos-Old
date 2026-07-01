/* THE PROBLEM
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. Thus A ↔ N, B ↔ O and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
*/

/* THE SOLUTION

*/


function rot13(str) {
  const Acode='A'.charCodeAt();
  const Ncode='N'.charCodeAt();
  const Zcode='Z'.charCodeAt();
  return [...str].map(
    function(e){
      const code=e.charCodeAt();
      if(Acode<=code && code<=Zcode){
        if(code<Ncode){
          return String.fromCharCode(code+13);
        } else {
          return String.fromCharCode(code-13);
        }
      } else {
        return e;
      }
    }
  ).join("");
  }
  
  rot13("SERR PBQR PNZC");

  module.exports = rot13;










































  /* OTHER SOLUTIONS 
  Take an empty array & store the string passed as arguments by using String split method.
example : let str = "An Apple"; str.split(''); this will give the result as ['A', 'n', ' ', 'A', 'p', 'p', 'l', 'e'];

Iterate the array using for loop

Inside the loop , take the ASCII char code of the first index and store it in a variable.

Check if the ASCII value lies between 65 and 90 i.e Capital alphabets.

If condition is true , check if ASCII value is greater than 77 i.e greater than 'M' , if it is true then subtract 13 from the ascii value , else if it is less than 77 than add 13 to the ascii value.

Now we need to replace character at that index with the corresponding new ASCII code obtained from step 5 using splice and String.fromCharCode

After the entire loop is completed we need to join the array using the join method.

Check out the final code below.


function rot13(str) {
  let charCode = 0;
  let strArr = [];
  strArr = str.split(""); // split the string into array
  for (let i = 0; i < strArr.length; i++) {
    charCode = strArr[i].charCodeAt();
    if (charCode >= 65 && charCode <= 90) {
      if (charCode > 77) {
        charCode = charCode - 13;
      }
      else {
        charCode = charCode + 13;
      }

      strArr.splice(i,1,String.fromCharCode(charCode));
    }
  }
  return strArr.join('');
}

rot13("SERR PBQR PNZC");
  */