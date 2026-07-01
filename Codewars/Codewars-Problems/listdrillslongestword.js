/* List Drills:Longest Word
    THE PROBLEM:
    Complete the function that takes one argument, a list of words, and returns the length of the longest word in the list.

    For example:

    ['simple', 'is', 'better', 'than', 'complex'] ==> 7
    Do not modify the input list.

*/

/* STEPS
1. Receive the list of words
2. Calculate the length of each
3. Compare the length of all against each other to find the biggest
4. Display the highest.
*/

function longest(words) {
    var wordsLengthArray = [];
    for(var i = 0; i<words.length; i++){
        // console.log(words[i].length);
        wordsLengthArray.push(words[i].length);
    }

    // console.log(wordsLengthArray);
    
    // var arrayIndex = 0;
    var highestNumber = 0;
    for(var arrayIndex = 0; arrayIndex < wordsLengthArray.length; arrayIndex++){
        highestNumber = Math.max(highestNumber, wordsLengthArray[arrayIndex]);
    }

    console.log(highestNumber);
    return highestNumber; //code here
  }


  longest(['simple', 'is', 'better', 'than', 'complex']);
  longest(['explicit', 'is', 'better', 'than', 'implicit']);
  longest(['beautiful', 'is', 'better', 'presumptious', 'than', 'ugly']);