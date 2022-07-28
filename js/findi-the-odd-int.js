const instuctions = `Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).`;

let answer = `function findOdd(A) {
  //loop through A
  for (let i = 0; i < A.length; i++){
    // use filter() to return an array with the elements that match our current iterations and get the length of that array
    const count = A.filter(el => el === A[i]).length;
    // if the length of the array has a remainder, that means the element has an odd number of occurances in the array
    if (count % 2 === 1 ) {
      // return the value of the element present and odd number of times
      return A[i]
    }
  }
}`;

console.log(instuctions);
console.log(answer);
