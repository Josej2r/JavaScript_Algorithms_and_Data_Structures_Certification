function getIndexToIns(arr, num) {

function comparar (a,b){return a -b }
arr.sort(comparar);

console.log(arr);
for(var i=0; i < arr.length; i++){

  if(arr[i] >= num ){
     
 return i

  }
}


return arr.length;
  
}

getIndexToIns([3, 10, 5],6 ) 
