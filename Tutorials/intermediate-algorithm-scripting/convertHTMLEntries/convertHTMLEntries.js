/*  THE PROBLEM
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

/* THE SOLUTION

*/

function convertHTML(str) {
    const htmlEntities = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&apos;"
    };

    return str
              .split("")
              .map(entity => htmlEntities[entity] || entity)
              .join("");  
    ;
  }
  
  convertHTML("Dolce & Gabbana");

  module.exports = convertHTML;