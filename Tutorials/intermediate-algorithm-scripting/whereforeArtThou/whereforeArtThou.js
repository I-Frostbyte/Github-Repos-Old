/* THE PROBLEM
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching name and value pairs (second argument). Each name and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], and the second argument is { last: "Capulet" }, then you must return the third object from the array (the first argument), because it contains the name and its value, that was passed on as the second argument.
*/


/* THE STEPS
*/

function whatIsInAName(collection, source) {

    // const arr = [];
    // Only change code below this line
    let sourceKeys = Object.keys(source);
    
    return collection
                .filter(obj => sourceKeys
                                    .every(key => obj.hasOwnProperty(key) &&
                                         obj[key] === source[key]));
    // Only change code above this line

    // console.log(sourceKeys);

  }

  module.exports = whatIsInAName;
  
//   whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

//   whatIsInAName([{ "apple": 1, "bat": 2 }, { "bat": 2 }, { "apple": 1, "bat": 2, "cookie": 2 }], { "apple": 1, "bat": 2 })




/*
    let arr = [2, 3, 5, 7]

    arr.map(function(element, index, array){
    console.log(element);
    console.log(index);
    console.log(array);
    return element;
    }, 80);
*/

/*  let objarr = [];
    for(let i = 0; i<collection.length; i++){
        objarr.push(Object.keys(collection[i]));
    }

    console.log(objarr[0][0]);
*/


/* THE ORIGINAL WORKING CODE THAT FAILED THE OTHER TESTS
 let arr = [];
  // Only change code below this line
  arr = (collection.filter(elt => elt.last === source.last));

  // Only change code above this line
  return arr;
*/

/* THE STEPS TAKEN AND HINTS AND ALL THAT - GOTTEN FROM FREECODECAMP HELP - STILL DID NO SOLVE ALL

Hints
Hint 1
You may use for loop or the Array.prototype.filter method.

Hint 2
Try to use the Object.prototype.hasOwnProperty method to know if the property name exists in an object (as its own property).

Hint 3
Check equivalence of Object in collection with Object passed as second parameter to whatIsInAName function.

Solutions
Solution 1 (Click to Show/Hide)
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const souceKeys = Object.keys(source);

  // filter the collection
  return collection.filter(obj => {
    for (let i = 0; i < souceKeys.length; i++) {
      if (!obj.hasOwnProperty(souceKeys[i]) ||
          obj[souceKeys[i]] !== source[souceKeys[i]]) {
        return false;
      }
    }
    return true;
  });
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
Code Explanation
We filter through the array using .filter().
Using a for loop we loop through each item in the object.
We use a if statement to check if the object in the collection doesn’t have the key and the property value doesn’t match the value in source.
We return false if the above if statement is correct. Otherwise, we return true;
*/

/* SOLUTION TO THIS PROBLEM - Still from freecodecamp - THE ONE THAT FINALLY RAN
function whatIsInAName(collection, source) {
  // "What's in a name? that which we call a rose
  // By any other name would smell as sweet.”
  // -- by William Shakespeare, Romeo and Juliet
  const sourceKeys = Object.keys(source);

  return collection
    .filter(obj => sourceKeys
                     .every(key => obj.hasOwnProperty(key) &&
                            obj[key] === source[key]));
}

// test here
whatIsInAName(
  [
    { first: "Romeo", last: "Montague" },
    { first: "Mercutio", last: null },
    { first: "Tybalt", last: "Capulet" }
  ],
  { last: "Capulet" }
);
Code Explanation
We filter through the collection using .filter().
Next, we return a Boolean value for the .filter() method.
Finally, we reduce to Boolean value to be returned for the .every() method.
*/