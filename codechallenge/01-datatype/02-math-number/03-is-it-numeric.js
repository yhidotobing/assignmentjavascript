function isItNumeric(n) {
  return !isNaN(parseFloat(n));
}

console.log(isItNumeric(12));
console.log(isItNumeric("abcd"));
console.log(isItNumeric("12"));
console.log(isItNumeric(" "));
console.log(isItNumeric(1.2));
console.log(isItNumeric(-200));
