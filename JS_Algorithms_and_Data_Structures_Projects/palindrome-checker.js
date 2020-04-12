function palindrome(str) {

  var sin_espacios = str.split(/\s|_|\W/).join("").toLowerCase();

var reverseWord = [];


for(var i=sin_espacios.length; i>=0 ; i--){

  reverseWord.push(sin_espacios[i]);

};
 
if(reverseWord.join("") === sin_espacios){
  return true;
}

return false
}



palindrome("A man, a plan, a canal. Panama");
