// The global variable
var bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];


// Change code below this line
function add (arr, bookName) {
  let newArr=[...arr];

  newArr.push(bookName);

  return newArr;
  
  // Change code above this line
}

// Change code below this line
function remove (arr,bookName) {
  let newArr= [...arr];
  var book_index = newArr.indexOf(bookName);
  
  if (book_index >= 0) {

    newArr.splice(book_index, 1);
    return newArr;

    // Change code above this line
    }
}

var newBookList = add(bookList, 'A Brief History of Time');
var newerBookList = remove(bookList, 'On The Electrodynamics of Moving Bodies');
var newestBookList = remove(add(bookList, 'A Brief History of Time'), 'On The Electrodynamics of Moving Bodies');

//console.log(bookList);
