// The global variable
var globalTitle = "Winter Is Coming";

// Only change code below this line
function urlSlug(title) {

console.log(title.toLowerCase().trim().split(/\s+/).join("-"));

return title.toLowerCase().trim().split(/\s+/).join("-");
}
// Only change code above this line

var winterComing = urlSlug(globalTitle); // Should be "winter-is-coming"
