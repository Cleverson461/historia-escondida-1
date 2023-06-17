function highestLetter(str){
  const sortedArray = str.toLowerCase().split('').sort();
  return sortedArray[sortedArray.length - 1]
}

/* 

function highestLetter(str){
  const lowerCaseString = str.toLowerCase();
  const lettersArray = lowerCaseString.split('');
  const sortedArray = lettersArray.sort();

  return sortedArray[sortedArray.length - 1]
}*/

console.log(highestLetter('Lorem ipsum dolore sec avanti')) // v
console.log(highestLetter('Hello!')); // o
console.log(highestLetter('May the force be with you')); // y
console.log(highestLetter('It s over nine thousand')) // v
console.log(highestLetter('Isaac')) // s
console.log(highestLetter('Cleverson')) // v