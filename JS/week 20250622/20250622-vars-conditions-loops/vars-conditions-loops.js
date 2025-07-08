//ex1
let num1 = 58423;
let numStr = "" + num1; // Convert num to str

let result = 0;
for (let i = 0; i < numStr.length; i++) result += numStr[i] * 1; // Convert numStr[i] to num and add to result

console.log(result); // 22

//ex2
let num2 = 10;
let stars = "*".repeat(num2);

for (let i = 1; i <= num2; i++) console.log(stars.substring(0, i));

//ex3
let val1 = 3,
  val2 = 2,
  val3 = 1,
  val4 = 5,
  val5 = 4;
console.log(Math.max(val1, val2, val3, val4, val5)); // 5

//ex4
let num3 = 10045;
console.log(("" + num3).length); // 5

//ex5
let start = 5;
let end = 13;
for (let i = start + (start % 2); i <= end; i += 2) console.log(i); // 6, 8, 10, 12

//ex6
let num4 = 1234;
let reversedNum = 0;

while (num4 > 0) {
  reversedNum = reversedNum * 10 + (num4 % 10);
  num4 = Math.floor(num4 / 10);
}

console.log(reversedNum); // 4321

// ex7
let depth = 5;
for (let i = 1; i <= depth; i++) console.log(("" + i).repeat(i));

//ex8
let threeDigitNum = 535;
console.log(
  Math.floor(threeDigitNum / 100) === Math.floor(threeDigitNum % 10)
    ? "Palindrome"
    : "Not a Palindrome"
); // Palindrome

//ex9
let numberBetween1and12 = 9;
for (let i = 1; i <= 10; i++)
  console.log(`${numberBetween1and12} * ${i} = ${numberBetween1and12 * i}`);

//ex10
let positiveNumber = 10;
while (positiveNumber !== 1)
  console.log(
    (positiveNumber =
      positiveNumber % 2 === 0 ? positiveNumber / 2 : positiveNumber * 3 + 1)
  ); // 5, 16, 8, 4, 2, 1
