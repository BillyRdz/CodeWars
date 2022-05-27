const instuctions = `Simple, remove the spaces from the string, then return the resultant string.
`;

let answer = `function noSpace(x){
  return x.replace(/\s+/g, '')
} or 
function noSpace(x){return x.split(' ').join('')}`;

let arrowAnswer = `const noSpace = x => x.replace(/\s+/g, '') or 
const noSpace = x => x.split(' ').join('')`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
