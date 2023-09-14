const ROMAN_NUMERALS = [
  [1000, "M"],
  [900, "CM"],
  [500, "D"],
  [400, "CD"],
  [100, "C"],
  [90, "XC"],
  [50, "L"],
  [40, "XL"],
  [10, "X"],
  [9, "IX"],
  [5, "V"],
  [4, "IV"],
  [1, "I"],
];

function convertToRoman(num, result = "") {
  for (const [value, romanCharacter] of ROMAN_NUMERALS) {
    if (num >= value) {
      result += romanCharacter;
      num -= value;
    }

    if (num >= value) {
      return convertToRoman(num, result);
    }
  }
  return result;
}

const result = convertToRoman(2024); // { result: 'MMXXIV' }
