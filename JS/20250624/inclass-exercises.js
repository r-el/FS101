let str = "FjldkNN5J4";

const upperAlphabet = Array.from({ length: 26 }, (_, i) =>
  String.fromCharCode(65 + i)
);

// Find indices of upper letters
const upperIndices = [];
for (let i = 0; i < str.length; i++)
  if (upperAlphabet.includes(str[i])) upperIndices.push(i);

// Remove upper letters
let finalStr = "";
for (let i = 0; i < str.length; i++)
  if (!upperAlphabet.includes(str[i])) finalStr += str[i];

console.log(finalStr);
