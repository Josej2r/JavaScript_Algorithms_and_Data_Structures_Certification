// Setup
var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
  // Your Code Here
if (myObj.hasOwnProperty(checkProp)){
  console.log( myObj.checkProp)
}
}

// Test your code by modifying these values
checkObj("gift");
