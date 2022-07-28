const instuctions = `Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)`;

let answer = `function persistence(num) {
  // set counter
  let count = 0;
  // convert num into a string
  num = num.toString();

  // while string has more than 1 char
  while(num.length > 1) {
    // increment counter by one
    count++;
    // convert string into array
    // convert the strings in the array into an integer
    // reduce the array into one value
    // convert back to a string for the next loop
    num = num.split('').map(Number).reduce((a,b,) => a * b).toString();
  }
  // return count
  return count;
}`;

console.log(instuctions);
console.log(answer);
