function findLongestWordLength(str) {
  
var palabras = str.split(" ");
let max=0;

for (let i=0; i< palabras.length; i++){

  

  if( palabras[i].length > max){
    max=palabras[i].length;
  }
}

  return max;
}

findLongestWordLength("The quick brown fox jumped over the lazy dog");
