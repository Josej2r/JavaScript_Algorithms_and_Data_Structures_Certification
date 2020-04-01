function destroyer(arr) {
   var args = Array.prototype.slice.call(arguments);



    for(var i=0; i< arr.length; i++){
      //console.log(args[0].length);
     for(var j=1; j<args.length;j++){

        if(arr[i] === args[j]){
           //newArr.push(args[0][i]);
             delete arguments[0][i];
        }

      };
    };

  console.log(arr.filter(Boolean));

  return arr.filter(Boolean);
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3)
