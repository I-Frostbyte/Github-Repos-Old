/* THE PROBLEM
You will be provided with an initial array (the first argument in the destroyer function), followed by one or more arguments. Remove all elements from the initial array that are of the same value as these arguments.

Note: You have to use the arguments object.
*/

/* THE STEPS TAKEN
*/

function destroyer(arr) {
    let args = [];

    for(let i = 1; i<arguments.length; i++){
        args.push(arguments[i]);
    }

    let newArr2 = arr.filter(elt => args.indexOf(elt) == -1);

    return newArr2;
  }
  
  destroyer([1, 2, 3, 1, 2, 3], 2, 3);

  module.exports = destroyer;









  
    // let newArr1 = args.filter(elt => arr.indexOf(elt) == -1);

    // let newArr = newArr1.concatnewArr2;

    // console.log(newArr2);









/*
  for(let j=0; j<arr.length;j++){
    for(let i=1; i<arguments.length; i++){
        if(arr[j] == arguments[i]){
            arr.splice(arguments[i], 1);
        }
    }
}

*/