const instuctions = `It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.`;

let answer = `function removeChar(str){
  return str.slice(1,-1);
};`;

let arrowAnswer = `const removeChar = str => str.slice(1,-1)`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
