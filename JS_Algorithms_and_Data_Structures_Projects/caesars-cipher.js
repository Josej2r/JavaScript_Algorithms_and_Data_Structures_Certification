function rot13(str) {
  var codigos=[];
  var cipher=[];
  
  for(var i=0; i< str.length; i++){
    codigos.push(str.charCodeAt(i));
  };

  for(var j=0; j< codigos.length; j++){

    if(codigos[j]<65 || codigos[j]>90){

    }else if(codigos[j] < 78){
      codigos[j]+=13;
    }else{
      codigos[j]-=13;
    }

  };
  
for (var c=0; c < codigos.length; c++){

  cipher.push(String.fromCharCode(codigos[c]))

}
console.log(cipher.join(""))
  return cipher.join("");
}

rot13("SERR YBIR?");
