function largestOfFour(arr) {
  // You can do this!
  var results = [];
  for (var n = 0; n < arr.length; n++) {
    var largestNumber = arr[n][0];
    for (var sb = 1; sb < arr[n].length; sb++) {
      if (arr[n][sb] > largestNumber) {
        largestNumber = arr[n][sb];
      }
    }

    results[n] = largestNumber;
  }

  return results;
}


/* Otra posible solución, creación personal

function largestOfFour(arr) {
  var max;
  var resultArray=[];

  for(let i=0; i < arr.length;i++){
    max=arr[i][0];
    
    for(let j=0; j < arr[i].length;j++){
      if(max < arr[i][j]){
        //console.log(max)
        max=arr[i][j];

      }
    }
  
  resultArray.push(max);
  }
  return resultArray;
}
*/


largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]])
