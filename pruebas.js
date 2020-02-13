function multiply(arr, n) {
  var product = arr[0];
  for (var i = 1; i <= n; i++) {
      product *= arr[i];
      console.log(product);
  }
  return product;
  console.log(product);
}

var arr=[1,2,3,4];
var n = arr.length -1;

multiply (arr,n);
