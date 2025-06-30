const sumNumbersSafe = require("./02-sum-numbers-safe");

function filterLargeSums(arrList, minTotal) {
  if (!Array.isArray(arrList)) throw new Error("Input must be an array of arrays");

  return arrList.filter((subArr) => sumNumbersSafe(subArr) >= minTotal);
}

module.exports = filterLargeSums;
