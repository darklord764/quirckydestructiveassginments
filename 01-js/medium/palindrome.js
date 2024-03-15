/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  str = str.toLowerCase();
  str = str.replace(/[^a-zA-z]/g , "")
  str = str.split("")
  let rev = str.slice().reverse();
  console.log(str)
  console.log(rev)
  return rev.join("")===str.join("");

}
// isPalindrome(`hello`)
module.exports = isPalindrome;
