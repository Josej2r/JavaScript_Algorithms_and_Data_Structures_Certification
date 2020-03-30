function spinalCase(str) {
  console.log(str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase());
  return str.split(/\s|_|(?=[A-Z])/).join("-").toLowerCase();
}

spinalCase('The_Andy_Griffith_Show');//_
spinalCase("This Is Spinal Tap");// \s
spinalCase("thisIsSpinalTap"); 
spinalCase("AllThe-small Things");
