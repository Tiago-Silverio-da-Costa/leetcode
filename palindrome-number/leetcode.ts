function isPalindrome(x: number): boolean {
  const numberTostring = x.toString()

  const reversedNumberToString = numberTostring.split('').reverse().join('');

  return numberTostring === reversedNumberToString;
}
console.log(isPalindrome(121)); 