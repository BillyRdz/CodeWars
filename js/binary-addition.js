const instuctions = `Implement a function that adds two numbers together and returns their sum in binary. The conversion can be done before, or after the addition.

The binary number returned should be a string.

Examples:(Input1, Input2 --> Output (explanation)))

1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)`;

let answer = `function addBinary(a,b) {
  return (a + b).toString(2)
 }`;

let arrowAnswer = `const addBinary = (a,b) => (a + b).toString(2);`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
//Binary is base 2; thus n.toString(2) converts n into a string containing the binary number. n.toString(16) would turn n to a hex string, for example.
console.log(
  "Binary is base 2; thus n.toString(2) converts n into a string containing the binary number. n.toString(16) would turn n to a hex string, for example."
);
