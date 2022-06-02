const instuctions = `Write a function to split a string and convert it into an array of words.

Examples (Input ==> Output):
"Robin Singh" ==> ["Robin", "Singh"]

"I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]`;

let answer = `function stringToArray(string){
	return string.split(' ')
}`;

let arrowAnswer = `const stringToArray = string => string.split(' ')`;

console.log(instuctions);
console.log(answer);
console.log(arrowAnswer);
