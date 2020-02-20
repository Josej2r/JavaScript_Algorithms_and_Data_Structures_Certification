function reverseString(str) {
  
  
  /*return str
    .split("")
    .reverse()
    .join("");*/
    
  for (var reversedStr = "", i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
 
  
}

reverseString("hello");
