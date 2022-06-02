const instuctions = `Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

Examples input/output:

XO("ooxx") => true
XO("xooxx") => false
XO("ooxXm") => true
XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
XO("zzoo") => false`;

let answer = `function XO(str) {
  let xo = str.toLowerCase().split('').sort()
  return xo.lastIndexOf('o') - xo.indexOf('o') == xo.lastIndexOf('x') - xo.indexOf('x') ? true : false
}`;

let arrowAnswer = `const XO = str => {
  let xo = str.toLowerCase().split('').sort()
  return xo.lastIndexOf('o') - xo.indexOf('o') == xo.lastIndexOf('x') - xo.indexOf('x') ? true : false
}`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
