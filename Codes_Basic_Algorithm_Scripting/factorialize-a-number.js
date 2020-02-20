function factorialize(num) {
var result =num;

if(num===0){
  result=1;
}
else{
  for( var i=1; i<num; i++){

   console.log( result = (result * i));
  }
  
}
return result;
}

factorialize(5);
