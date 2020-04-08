function truthCheck(collection, pre) {
  
var trusly=0;
  for(var i=0; i < collection.length; i++){

    if(collection[i].hasOwnProperty(pre) && Boolean(collection[i][pre])){
    trusly++;

    }
  }

return trusly == collection.length;

}

truthCheck([{"user": "Tinky-Winky", "sex": "male"}, {"user": "Dipsy", "sex": "male"}, {"user": "Laa-Laa", "sex": "female"}, {"user": "Po", "sex": "female"}], "sex")
