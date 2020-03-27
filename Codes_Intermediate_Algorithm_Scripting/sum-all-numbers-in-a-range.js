function sumAll(arr) {
var sum=0;
  for(let i= Math.min(arr[0], arr[1]); i<= Math.max(arr[0] , arr[1]);i++){

    sum=sum+i;
    //console.log(sum);

  }
  console.log(sum)
  return sum;
}

sumAll([1, 4]);
