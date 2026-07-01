/* THE PROBLEM
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/

/* THE SOLUTION
*/

function fearNotLetter(str) {
  const strIndexes = [];
  let missingLetter = "";
  let missingCode = 0;
  for(i=0; i<str.length; i++){
    strIndexes.push(str.charCodeAt(i))
  }

  for(j=0; j<strIndexes.length; j++){
    if((strIndexes[j] - strIndexes[j+1] === -2)){
      missingCode = strIndexes[j] + 1;
    }
  }

  // console.log(strIndexes);
  // console.log(missingCode);
  


  if(missingCode > 0){
    return missingLetter = String.fromCharCode(missingCode);
  }
  else {
    return undefined;
  }

    // return missingLetter;

}
  
  fearNotLetter("abce");

  module.exports = fearNotLetter;



































  /* 
  const strIndexes = [];
  let missingLetter = "";
  for(i=0; i<str.length; i++){
    strIndexes.push(str.charCodeAt(i))
  }

  for(j=0; j<strIndexes.length; j++){
    if(strIndexes[j] + 1 !== strIndexes[j+1]){
      let missingCode = strIndexes[j] - 1;
      missingLetter = String.fromCharCode(missingCode);
    }
  }

  console.log(missingLetter);

  return missingLetter;
  */

  /* 
  for (let i = 1; i < str.length; ++i) {
      if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
        return String.fromCharCode(str.charCodeAt(i - 1) + 1);
      }
    }
  */