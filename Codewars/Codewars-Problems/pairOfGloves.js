/* THE PROBLEM
Pair of gloves
Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.

Examples:
input = ["red", "green", "red", "blue", "blue"]
result = 2 (1 red pair + 1 blue pair)

input = ["red", "red", "red", "red", "red", "red"]
result = 3 (3 red pairs)
*/

/* THE STEPS
1. Open the drawer to see the gloves in it (receive the array)
2. Note how many total gloves are in the drawer
3. Note how many different colors there are of the gloves in the drawer
4. Match those that are of the same color
5. Count how many pairs you finally have
*/

function numberOfPairs(gloves){
  //My hands are freezing 
  // differentColorArray.push(gloves[0]);

  // for(let i = 0; i<gloves.length; i++){
  //   for(let n = 0; n<differentColorArray.length; n++){
  //     if(differentColorArray[i] != gloves[i + 1]){
  //       differentColorArray.push(gloves[i+1]);
  //     }

  //     if(gloves[i + 1] == differentColorArray[n]){
  //       differentColorArray.
  //     }
  //   }
  // }
  // for(let n = 0; n<differentColorArray.length; n++){
  //   for (let i = 1; i<gloves.length; i++){
  //     if(differentColorArray[n] != gloves[i]){
  //       differentColorArray.push(gloves[i]);
  //       i++;
  //     }
  //     n++;
        // i++
      // } else {
      //   differentColorArray.push(gloves[i]);
      //   n++
      // }  
    //}
    // if(gloves[i] == gloves[i + 1]){
    //   i++;
    // }
    
//}

  let differentColorArray = [...new Set(gloves)];

  let numberOfAColor = [];
  let numberCounter = 0;
  for(let j = 0; j<differentColorArray.length; j++){
    for(let k = 0; k<gloves.length; k++){
      if(differentColorArray[j] == gloves[k]){
        numberCounter++;
      }
    }
    numberOfAColor.push(numberCounter);
    numberCounter = 0;
  }

  let finalPairs = [];
  for(let l = 0; l<numberOfAColor.length; l++){
    finalPairs.push(Math.floor(numberOfAColor[l] / 2));
  }

  let finalPairsCounter = 0;
  for(let m = 0; m<finalPairs.length; m++){
    finalPairsCounter += finalPairs[m];
  }

  // console.log(differentColorArray + "\t\t" +"Shows the array of individual colors");
  // console.log(numberOfAColor + "\t\t" +"Shows the number of gloves found for each color");
  // console.log(finalPairs+ "\t\t" + "Shows the pairs formed for each glove");
  // console.log(finalPairsCounter);
  return finalPairsCounter;
}

module.exports = numberOfPairs;

numberOfPairs(['gray', 'black', 'purple', 'purple', 'gray', 'black']);

numberOfPairs(['red', 'red', 'green']);