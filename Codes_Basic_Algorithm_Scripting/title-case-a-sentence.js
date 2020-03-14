function titleCase(str) {
   var toArray = str.toLowerCase().split(" ");
   //pasamos de string array separado por los espacios en blanco
  var result = toArray.map(function(val) {
    return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
  });

  //pasamos de array a string y devolvemos resultado
  return result.join(" ");
}

titleCase("I'm a little tea pot");
