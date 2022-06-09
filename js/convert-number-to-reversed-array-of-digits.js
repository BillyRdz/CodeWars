const instuctions = `Convert number to reversed array of digits
Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

Example(Input => Output):
348597 => [7,9,5,8,4,3]
0 => [0]`;

let answer = `function digitize(n) {
  return n.toString().split('').map(el => Number(el)).reverse()
}`;

let arrowAnswer = `const digitize = n => n.toString().split('').map(el => Number(el)).reverse()`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
