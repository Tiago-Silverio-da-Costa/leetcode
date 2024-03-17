function isPalindrome(x) {
    var numberTostring = x.toString();
    var reversedNumberToString = numberTostring.split('').reverse().join('');
    return numberTostring === reversedNumberToString;
}
console.log(isPalindrome(-121));
