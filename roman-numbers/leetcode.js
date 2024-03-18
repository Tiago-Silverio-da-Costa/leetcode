function RomanNumberConverted(roman) {
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
  }

  let result = 0;

  for (let i = 0; i < roman.length; i++) {
    let currentNumeral = roman[i];
    let currentValue = romanNumerals[currentNumeral];
    let nextNumeral = roman[i + 1];
    let nextValue = romanNumerals[nextNumeral];

    if (nextValue > currentValue) {
      result += nextNumeral - currentValue;
      i++;
    } else {
      result += currentValue;
    }
  }
  return result;
}

console.log(RomanNumberConverted("XXXIII"));
