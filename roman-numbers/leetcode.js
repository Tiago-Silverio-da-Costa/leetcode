function romanToInt(roman) {
  const romanNumerals = {
    I: 1,
    IV: 4,
    V: 5,
    IX: 9,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;

  // my way
  for (let i = 0; i < roman.length; i++) {
    let currentNumeral = romanNumerals[roman[i]];
    let nextNumeral = roman[i - 1];
    let nextValue = romanNumerals[nextNumeral];

    if (currentNumeral > nextValue) {
      result -= nextValue;
      result += currentNumeral - nextValue;
    } else {
      result += currentNumeral;
    }
  }

  // community way

  // The intuition behind this code is to iterate through the Roman numeral string from right to left, converting
  // each symbol to its corresponding integer value. If the current symbol has a smaller value than the symbol to its
  // right, we subtract its value from the result; otherwise, we add its value to the result. By processing the string
  // from right to left, we can handle cases where subtraction is required (e.g., IV for 4) effectively.

  // 1. Create an unordered map (romanValues) to store the integer values corresponding to each Roman
  // numeral symbol ('I', 'V', 'X', 'L', 'C', 'D', 'M').

  // 2. Initialize a variable result to 0 to store the accumulated integer value.

  // 3. Iterate through the input string roman from right to left (starting from the last character).

  // 4. For each character at index i, get its integer value (currentNumeral) from the romanValues map.

  // 5. Check if the current symbol has a smaller value than the symbol to its right (i.e., currentNumeral < romanNumerals[roman[i + 1]])
  // using the condition i < roman.length() - 1. If true, subtract currentNumeral from the result; otherwise, add it to the result.

  // 6. Update the result accordingly for each symbol as you iterate through the string.

  // 7. Finally, return the accumulated result as the integer equivalent of the Roman numeral.

  // for (let i = roman.length - 1; i >= 0; i--) {
  //   let currentNumeral = romanNumerals[roman[i]];
  //   if (i < roman.length - 1 && currentNumeral < romanNumerals[roman[i + 1]]) {
  //     result -= currentNumeral;
  //   } else {
  //     result += currentNumeral;
  //     console.log("result", result);
  //   }
  // }

  return result;
}

console.log(romanToInt("MCMXCIV"));
