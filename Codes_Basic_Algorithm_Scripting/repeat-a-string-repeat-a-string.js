function repeatStringNumTimes(str, num) {

    //var strRepeated ="";
  /*if(num >0){
    strRepeated=str.repeat(num);
  }*/
for(var strRepeated=""; num>0; num--){

  strRepeated+=str;
}
  return strRepeated;
}

repeatStringNumTimes("abc", 3);
