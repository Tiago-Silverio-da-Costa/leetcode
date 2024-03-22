function longestCommonPrefix(str) {
  // str index is equal set what is equal if not return error
  var charCount = {};
  for (var i = 0; i < str.length; i++) {
    var _loop_1 = function (j) {
      var character = str[i].charAt(j);
      console.log("character==", character);
      console.log("str[i]", str[i]);
      charCount[character] = (charCount[character] || 0) + 1;
      console.log("charCount==", charCount);
    };
    for (var j = 0; j < str[i].length; j++) {
      _loop_1(j);
    }
    values = [];
    for (var char in charCount) {
      if (charCount[char] === str.length) {
        values += char.toString().split("").join("");
        console.log("char", char);
        console.log("str.length - 1", str.length - 1);
        console.log("str.length", str.length );
        console.log("charCount[char]", charCount[char] );
        console.log("charCount", charCount );
        
      }
    }
  }
  if (values.length === 0) {
    return console.log("There is no common prefix among the input strings.");
  }
  return console.log(values);
}
longestCommonPrefix(["dog","racecar","car"]);
