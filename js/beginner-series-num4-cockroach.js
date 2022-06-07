const instuctions = `The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).

For example:

1.08 --> 30
Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.`;

let answer = `function cockroachSpeed(s) {
  //1 km / hr == 27.7778 cm / s
  const cm = 27.7778
  return Math.floor(s * cm)
}`;

let arrowAnswer = `const cockroachSpeed = s => {
  //1 km / hr == 27.7778 cm / s
  const cm = 27.7778
  return Math.floor(s * cm)
}`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
