const instuctions = `Write a function that returns a string in which firstname is swapped with last name.

nameShuffler('john McClane'); => "McClane john"`;

let answer = `function nameShuffler(str) {
  return str.split(' ').reverse().join(' ');
 }`;

let arrowAnswer = `const nameShuffler = str => str.split(' ').reverse().join(' ');`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
