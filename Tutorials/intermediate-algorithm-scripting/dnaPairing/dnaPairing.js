/* THE PROBLEM
Pairs of DNA strands consist of nucleobase pairs. Base pairs are represented by the characters AT and CG, which form building blocks of the DNA double helix.

The DNA strand is missing the pairing element. Write a function to match the missing base pairs for the provided DNA strand. For each character in the provided string, find the base pair character. Return the results as a 2d array.

For example, for the input GCG, return [["G", "C"], ["C","G"], ["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

/* STEPS 
1 - Create an object for the gene pairings.
2 - Use split to create the individual strings from the general.
3 - Use map.array to create a new array for each element and their corresponding pair.
*/

function pairElement(str) {
  const pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G"
  }

  
  const finalPair = [];

  return str
            .split("")
            .map(x => [x, pairs[x]])
            ;
}

pairElement("GCG");

module.exports = pairElement;



















/*
const newPair = [];
              switch(x) {
                case "G" :
                  newPair.push("G", "C");
                  break;
                case "C" :
                  newPair.push("C", "G");
                  break;
                case "T" :
                  newPair.push("T", "A");
                  break;
                case "A" :
                  newPair.push("A", "T");
                  break;
                default :
                  newPair.push("");
              }

                finalPair.push(newPair);

*/