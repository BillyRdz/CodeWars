const instuctions = `Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.`;

let answer = `function findShort(s){
  return Math.min(...s.split(' ').map((word) => word.length))
  }`;

let arrowAnswer = `const findShort = s => Math.min(...s.split(' ').map((word) => word.length))`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
