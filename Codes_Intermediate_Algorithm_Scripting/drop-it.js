function dropElements(arr, func) {
  var times= arr.length;
 
  for(var i = 0; i < times; i++){

    if( func(arr[0]) ){
      
      break;
    }else{
      
      arr.shift();
      
    }
    
  }
  console.log(arr);
  return arr;
}

dropElements([0, 1, 0, 1], function(n) {return n < 3; });
