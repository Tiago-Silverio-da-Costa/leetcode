function longestCommomPrefix(str: string[]) {
  // str index is equal set what is equal if not return error
  let charCount: { [key: string]: number } = {};

  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < str[i].length; j++) {
      str.map((e) => e.charAt(j));
      let character = str[i].charAt(j);
      charCount[character] = (charCount[character] || 0) + 1;
    }

    for (let char in charCount) {
      if (charCount[char] > str.length - 1) {
        console.log(char);
      } 
    }
  }

}

longestCommomPrefix(["flower", "flow", "flight"]);
