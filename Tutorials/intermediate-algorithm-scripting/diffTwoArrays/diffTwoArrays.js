/* THE PROBLEM
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.

Note: You can return the array with its elements in any order.
*/


function diffArray(arr1, arr2) {
    let newArr = [];

    let newArr1 = arr2.filter(elt => arr1.indexOf(elt) == -1);

    let newArr2 = arr1.filter(elt => arr2.indexOf(elt) == -1);

    newArr = newArr1.concat(newArr2);

    // console.log(newArr);

/*
    if(arr1.length > arr2.length){
        for(let i=0; i<arr1.length; i++){
            arr2.indexOf(arr1[i]);
            if(arr2.indexOf(arr1[i]) == -1){
                newArr.push(arr1[i]);
            }
        }
    } else if(arr2.length > arr1.length){
        for(let i=0; i<arr2.length; i++){
            arr1.indexOf(arr2[i]);
            if(arr1.indexOf(arr2[i]) == -1){
                newArr.push(arr2[i]);
            }
        }
    } else if(arr1.forEach(element => {
        element.indexOf
    }) && arr2.forEach(number => {

    })){
        newArr = arr1.concat(arr2);
    }
*/    
    return newArr;
  }
  
  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);
  diffArray([1, "calf", 3, "piglet"], [7, "filly"]);

  module.exports = diffArray;


  // else if(arr1.forEach(element => {
    //     for(let i = 0; i<arr2length;i++){
    //         element.indexOf(arr2[i]) == -1;
    //     }
    //     newArr.push(arr1)
    // })){

    // }
    
    // console.log(newArr);