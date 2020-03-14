function frankenSplice(arr1, arr2, n) {

  let frankenArr = arr2.slice(0);

for(var i=arr1.length-1; i>=0;i--){
  frankenArr.splice(n, 0, arr1[i]);
}
  console.log(frankenArr)
  return frankenArr;
}

frankenSplice([1, 2, 3], [4, 5], 1);
