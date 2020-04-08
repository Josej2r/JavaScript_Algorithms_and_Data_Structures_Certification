function binaryAgent(str) {
  var palabras = str.split(" ");
  var frase=[];

for(var i=0; i< palabras.length;i++){
  
  frase.push(String.fromCharCode(parseInt(palabras[i],2)));
};
  console.log(frase.join(""));
  return frase.join("");
}

binaryAgent("01001001 00100000 01101100 01101111 01110110 01100101 00100000 01000110 01110010 01100101 01100101 01000011 01101111 01100100 01100101 01000011 01100001 01101101 01110000 00100001")
