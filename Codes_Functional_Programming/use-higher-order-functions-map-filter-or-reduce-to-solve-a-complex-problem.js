const squareList = (arr) => {
  // Only change code below this line

  var positive_entero=arr.filter(arr => arr > 0 && arr % parseInt(arr) === 0);
 

  return positive_entero.map(arr => Math.pow(arr, 2));
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
