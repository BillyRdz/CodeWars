const instuctions = `Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow'`;

let answer = `function solution(str) {
  return str.split("").reverse().join("");
}`;

let arrowAnswer = `const solutionArrow = (str) => str.split("").reverse().join("");`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
