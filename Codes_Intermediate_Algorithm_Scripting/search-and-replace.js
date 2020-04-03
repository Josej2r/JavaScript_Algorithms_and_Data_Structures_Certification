function myReplace(str, before, after) {

  var indice=str.indexOf(before);

  if(str[indice] === str[indice].toUpperCase()){

    after = after.charAt(0).toUpperCase() + after.slice(1);
    
   console.log(after); 
  }

  return str.replace(before, after);
}

myReplace("His name is Tom", "Tom", "john")
