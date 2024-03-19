function longestCommomPrefix(str) {
    // str index is equal set what is equal if not return error
    var charCount = {};
    for (var i = 0; i < str.length; i++) {
        var _loop_1 = function (j) {
            str.map(function (e) { return e.charAt(j); });
            var character = str[i].charAt(j);
            charCount[character] = (charCount[character] || 0) + 1;
        };
        for (var j = 0; j < str[i].length; j++) {
            _loop_1(j);
        }
        for (var char in charCount) {
            if (charCount[char] > str.length - 1) {
                console.log(char.toString() + " " + charCount[char] + " " + str.length);
            }
        }
    }
}
longestCommomPrefix(["flower", "flow", "flight"]);
