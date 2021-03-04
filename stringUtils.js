const reverseStr = (str) => {
  return str.split('').reverse().join('')
}
console.log(reverseStr('manu'))

const isPalindrome = (str2) => {
  return str2 === reverseStr(str2) ? true : false;
}

console.log(isPalindrome('kayak'))