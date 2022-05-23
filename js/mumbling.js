const instuctions = `This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.`;

let answer = `function accum(s) {
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
}`;

let arrowAnswer = `const accum = (s) => s.split('').map((c,i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
