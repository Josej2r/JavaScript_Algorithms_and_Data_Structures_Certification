let quit = "qu";
let noquit = "qt";
let quRegex= /q(?=u)/;
let qRegex = /q(?!u)/;
console.log(quit.match(quRegex)); // Returns ["q"]
console.log(noquit.match(qRegex)); // Returns ["q"]
