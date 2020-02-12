// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here

  if (myObj.hasOwnProperty(checkProp)) {
    return myObj[checkProp]; // As the property name is stored in the variable we need to use the [ ]. No esto seguro de eso
  } 
    return "Not Found";
  
}

// Test your code by modifying these values
checkObj("gift");
