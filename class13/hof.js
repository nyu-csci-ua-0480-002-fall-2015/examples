/*
function reduce(arr, callback, start) {
  var accum = start;
  arr.forEach(function(ele){
    accum = callback(ele, accum);
  });
  return accum;
}

console.log(reduce([4, 12, 5], function(ele, accum) {
  return accum + ele;  
}, 0));

*/
function reduce(arr, combine, start) {
  var accum = start;
  arr.forEach(function(ele){
    accum = combine(accum, ele); 
  }); 
  return accum;
}

console.log(reduce([4, 12, 5], function(accum, ele) {
  return accum + ele;  
}, 0));

var numbers = [-5, -2, -1, -10, -3];
// find minimum
console.log(reduce(numbers, function(accum, ele) {
  if(accum < ele) {
    return accum;
  } else {
    return ele; 
  }
}, numbers[0]));
