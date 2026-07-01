/* THE PROBLEM

Convert the given number into a roman numeral.

Roman numerals	Arabic numerals
M	1000
CM	900
D	500
CD	400
C	100
XC	90
L	50
XL	40
X	10
IX	9
V	5
IV	4
I	1
All roman numerals answers should be provided in upper-case.

*/

/* THE SOLUTION

*/

function convertToRoman(num) {

    let romans = 
  [
    ["I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"], 
    ["X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX","XC"], 
    ["C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"],
    ["M"],
  ];

  let split = num.toString().split('').reverse();

  return split.map((n, i) => i === 3 ? `${romans[i][0].repeat(parseInt(n))}`: n > 0 ? romans[i][parseInt(n) - 1] : '').reverse().join('');

   }
   
   convertToRoman(36);

   module.exports = convertToRoman;
























































   /*  COME BACK TO THIS LATER AND FIX IT

   let romans = {
        1 : "I",
        2 : "II",
        3 : "III",
        4 : "IV",
        5 : "V",
        6 : "VI",
        7 : "VII",
        8 : "VIII",
        9 : "IX",
        10 : "X",
        20 : "XX", 
        30 : "XXX", 
        40 : "XL", 
        50 : "L", 
        60 : "LX", 
        70 : "LXX", 
        80 : "LXXX", 
        90 : "XC", 
        100 : "C", 
        200 : "CC", 
        300 : "CCC", 
        400 : "CD", 
        500 : "D", 
        600 : "DC", 
        700 : "DCC", 
        800 : "DCCC", 
        900 : "CM",
        1000 : "M"
    }

    let split = num.toString().split('').reverse();
    console.log(split)

    return split
                .map(x => [romans[x]])
                .reverse()
                .join("")
                ;
   
   */