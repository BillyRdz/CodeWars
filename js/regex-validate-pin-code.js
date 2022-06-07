const instuctions = `ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

If the function is passed a valid PIN string, return true, else return false.

Examples (Input --> Output)
"1234"   -->  true
"12345"  -->  false
"a234"   -->  false`;

let answer = `function validatePIN (pin) {
  // / ... / declares regex
  // ^ starts regex $ ends regex
  // You can use \d, instead of [0-9], it's a short hand
  // specify length {}
  // | =="or"
  if (/^(\d{4}|\d{6})$/.test(pin)) {
    return true;
  } else {
    return false;
  }
} 
or 
function validatePIN(pin) {
  return /^(\d{4}|\d{6})$/.test(pin)
}`;

console.log(instuctions);
console.log(answer);
