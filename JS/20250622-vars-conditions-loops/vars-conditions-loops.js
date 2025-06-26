//ex1
let num = 58423;
let numStr = "" + num; // Convert num to str

let result = 0;
for (let i = 0; i < numStr.length; i++) result += numStr[i] * 1; // Convert numStr[i] to num and add to result

console.log(result);

//ex2
let num = 10;
let stars = "*".repeat(num);

for (let i = 1; i <= num; i++) console.log(stars.substring(0, i));

//ex3
let val1 = 3,
  val2 = 2,
  val3 = 1,
  val4 = 5,
  val5 = 4;
console.log(Math.max(val1, val2, val3, val4, val5));

//ex4
let num = 10045;
console.log(("" + num).length);

//ex5
let start = 5;
let end = 13;
for (let i = start + (start % 2); i <= end; i += 2) console.log(i);

//ex6
let num = 1234;
let reversedNum = 0;

while (num > 0) {
  reversedNum = reversedNum * 10 + (num % 10);
  num = Math.floor(num / 10);
}

console.log(reversedNum);

// ex7
let depth = 5;
for (let i = 1; i <= depth; i++) console.log(("" + i).repeat(i));

//ex8
let threeDigitNum = 535;
console.log(
  Math.floor(threeDigitNum / 100) === Math.floor(threeDigitNum % 10)
    ? "Palindrome"
    : "Not a Palindrome"
);

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
  );
