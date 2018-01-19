var ingredient1 = 'bread';
var ingredient2 = 'mild cheese';
var ingredient3 = 'sharp cheese';
var ingredient4 = 'butter';
var ingredient5 = 'tomato';
var ingredient6 = 'garlic';

var chocolateBars = [
  'snickers',
  'hundred grand',
  'kitkat',
  'skittles'
  ]
  
 // ['butterfinger', ...chocolateBars];
  
  function addElementToBeginningOfArray(arr, element){
    var newArr = arr.unshift(x);
    return newArr;
    
  }

  function destructivelyAddElementToBeginningOfArray(arr,element){
    arr.unshift(x);
    return arr;
  }
  
  function addElementToEndOfArray(arr,element){
    var newArr = arr.push(x)
    return newArr;
  }
  
  function destructivelyAddElementToEndOfArray(arr,element){
    arr.push(x);
    return arr;
  }
  
  function accessElementInArray(arr,element){
    return arr[element];
    
  }
  
  function destructivelyRemoveElementFromBeginningOfArray(arr){
    return arr.shift()
  }
    
  
  