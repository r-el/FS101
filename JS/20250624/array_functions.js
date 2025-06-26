//ex1
let intArr = [1, 2, 3, 4];
let doubleValues = (intArr) => intArr.map((num) => num * 2);
console.log(doubleValues(intArr)); // [2, 4, 6, 8]

//ex2
let intArr2 = [1, 2, 3, 4];
let onlyEvenValues = (intArr) => intArr.filter((num) => num % 2 == 0);
console.log(onlyEvenValues(intArr2))[(2, 4)];

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
