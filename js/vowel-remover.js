const instuctions = `Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

Examples
"hello"     -->  "hll"
"codewars"  -->  "cdwrs"
"goodbye"   -->  "gdby"
"HELLO"     -->  "HELLO"
don't worry about uppercase vowels
y is not considered a vowel for this kata`;

let answer = `function shortcut (string) {
  return string.split('').map(i => i.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '')).join('');
}`;

let arrowAnswer = `const shortcut = string => string.split('').map(i => i.replace('a', '').replace('e', '').replace('i', '').replace('o', '').replace('u', '')).join('');`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
