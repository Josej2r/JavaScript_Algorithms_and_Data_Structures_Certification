function countOnline(usersObj) {
  // change code below this line
 let result = 0;
  for (let user in usersObj) {
    if (usersObj[user].online === true) {
      result++;
    }
  }
  return result;
  // change code above this line
};

