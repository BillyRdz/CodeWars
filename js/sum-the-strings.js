const instuctions = `Create a function that takes 2 integers in form of a string as an input, and outputs the sum (also as a string):

Example: (Input1, Input2 -->Output)

"4",  "5" --> "9"
"34", "5" --> "39"
"", "" --> "0"
"2", "" --> "2"
"-5", "3" --> "-2"
Notes:

If either input is an empty string, consider it as zero.

Inputs and the expected output will never exceed the signed 32-bit integer limit (2^31 - 1)`;

let answer = `function sumStr(a,b) {
  return (parseInt(a ? a : 0) + parseInt(b ? b : 0)).toString()
}`;

let arrowAnswer = `const sumStr = (a,b) => (parseInt(a ? a : 0) + parseInt(b ? b : 0)).toString();`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
