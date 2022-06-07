const instuctions = `Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

The output should be two capital letters with a dot separating them.

It should look like this:

Sam Harris => S.H

patrick feeney => P.F`;

let answer = `function abbrevName(name){
  return name.toUpperCase().split(' ').map(x => x[0]).join('.');
}`;

let arrowAnswer = `const abbrevName = name => name.toUpperCase().split(' ').map(x => x[0]).join('.');`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
