const instuctions = `Description
We need a function that can transform a string into a number. What ways of achieving this do you know?

Note: Don't worry, all inputs will be strings, and every string is a perfectly valid representation of an integral number.

Examples
"1234" --> 1234
"605"  --> 605
"1405" --> 1405
"-7" --> -7`;

let answer = `const stringToNumber = function(str){
  return parseInt(str)
}`;

let arrowAnswer = `const stringToNumber = (str) => parseInt(str);`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
