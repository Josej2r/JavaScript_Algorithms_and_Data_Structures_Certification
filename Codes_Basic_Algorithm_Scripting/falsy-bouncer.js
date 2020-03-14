function bouncer(arr) {
  
  var truslyArr=[];

  for(let i=0; i< arr.length; i++){

    if( arr[i]){
      truslyArr.push(arr[i]);
    }

  }
  
 
  return truslyArr;

}

bouncer([7, "ate", "", null, 9]);
