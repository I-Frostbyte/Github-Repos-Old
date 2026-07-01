/* THE PROBLEM
We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them. The lowest number will not always come first.

For example, sumAll([4,1]) should return 10 because sum of all the numbers between 1 and 4 (both inclusive) is 10.
*/

/* STEPS TAKEN
1 - Create a set of inputs that holds all the numbers between the two numbers given including them.
2 - Add them all up together
*/

function sumAll(arr) {

  let newArr = [];
  if(arr[0] > arr[1]){
    for(let i = arr[1]; i<=arr[0]; i++){
      newArr.push(i);
    }
  } else if(arr[1] > arr[0]){
    for(let i = arr[0]; i<=arr[1]; i++){
      newArr.push(i);
    }
  }

  function sumUp(j) { 
    if(j <= newArr[0]){
      return j;
    }

    return j + sumUp(j-1);
  }

  let sumArr = sumUp(newArr[newArr.length-1]);

  // console.log(newArr);

  // console.log(sumArr)

  return sumArr;
  

  // return 1;
}

sumAll([1, 4]);

module.exports = sumAll;