function rangeOfNumbers(startNum, endNum) {

if(startNum === endNum){
  return [startNum];
}else{
  const rangeArray = rangeOfNumbers (startNum ,endNum -1);
  rangeArray.push(endNum);
  return rangeArray;
  
}
  
};

rangeOfNumbers (1, 5)