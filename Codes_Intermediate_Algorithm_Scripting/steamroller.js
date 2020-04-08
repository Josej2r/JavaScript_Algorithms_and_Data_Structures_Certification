function steamrollArray(arr) {
  var rellenoArray=[];

  var relleno = function(arg){

    if(!Array.isArray(arg)){
      rellenoArray.push(arg);
    }else {
      for(var a in arg){
        relleno(arg[a]);
      }
    }
  };
  arr.forEach(relleno);
  return rellenoArray;
};

steamrollArray([1, [2], [3, [[4]]]]);
