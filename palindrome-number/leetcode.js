function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    var numInString = x.toString();
    console.log("numInString", numInString);
    var backwardsText = "";
    for (var _i = 0, numInString_1 = numInString; _i < numInString_1.length; _i++) {
        var letter = numInString_1[_i];
        backwardsText = letter + backwardsText;
        console.log("letter", backwardsText);
    }
    console.log("backwardsText", backwardsText);
    return numInString === backwardsText;
}
;
isPalindrome(213); // true
