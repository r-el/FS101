//ex1
let intArr = [1, 2, 3, 4];
let doubleValues = (intArr) => intArr.map((num) => num * 2);
console.log(doubleValues(intArr)); // [2, 4, 6, 8]

//ex2
let intArr2 = [1, 2, 3, 4];
let onlyEvenValues = (intArr) => intArr.filter((num) => num % 2 == 0);
console.log(onlyEvenValues(intArr2)); // [(2, 4)]

//ex3
let showFirstAndLast = (arr) => [
  arr.find((val) => typeof val === "string"),
  arr.findLast((val) => typeof val === "string"),
];
console.log(showFirstAndLast([4, null, {}, "fisrt", null, "last", false])); // ['fisrt', 'last']

//ex4
function vowelCount(str) {
  const vowelChars = ["a", "e", "i", "o", "u"];
  const counts = Object.fromEntries(vowelChars.map((vc) => [vc, 0]));

  // More efficient than map + filter. Iterates only once
  for (const char of str) {
    char.toLowerCase() in counts && counts[char.toLowerCase()]++;
  }
  return counts;
}
console.log(vowelCount("ariel oo")); // {a: 1, e: 1, i: 1, o: 2, u: 0}

//ex5
let capitalize = (str) =>
  str
    .split("")
    .map((char) =>
      char >= "a" && char <= "z"
        ? String.fromCharCode(char.charCodeAt(0) - 32) // In ASCII: 'a' - 'A' = 32
        : char
    )
    .join("");
console.log(capitalize("Ariel 1@אa")); // ARIEL 1@אA

//ex6
const LOWER_A = "a".charCodeAt(0);
const LOWER_Z = "z".charCodeAt(0);
const UPPER_A = "A".charCodeAt(0);
const UPPER_Z = "Z".charCodeAt(0);
const ALPHABET_LENGTH = 26;

const shiftLetter = (char) => {
  const code = char.charCodeAt(0);
  if (code >= LOWER_A && code <= LOWER_Z) {
    // Lowercase
    return String.fromCharCode(
      ((code - LOWER_A - 1 + ALPHABET_LENGTH) % ALPHABET_LENGTH) + LOWER_A
    );
  }
  if (code >= UPPER_A && code <= UPPER_Z) {
    // Uppercase
    return String.fromCharCode(
      ((code - UPPER_A - 1 + ALPHABET_LENGTH) % ALPHABET_LENGTH) + UPPER_A
    );
  }
  return char;
};
const shiftLetters = (str) => str.split("").map(shiftLetter).join("");
console.log(shiftLetters("abc XYZ")); // zab WXY

//ex7
let swapCase = (str) =>
  str
    .split(" ")
    .map((word, idx) => (idx % 2 === 1 ? capitalize(word) : word))
    .join(" ");
console.log(swapCase("hello world this is a test")); // hello WORLD this IS a TEST
