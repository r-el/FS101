const filterLargeSums = require("./03-filter-large-sums");
const extractNumbers = require("./01-extract-numbers");
const sumNumbersSafe = require("./02-sum-numbers-safe");

const summaryStats = (arrList) =>
  filterLargeSums(arrList, 10).map((subArr) => {
    const nums = extractNumbers(subArr);
    const sum = sumNumbersSafe(subArr);
    return { sum, average: nums.length ? sum / nums.length : 0 };
  });

module.exports = summaryStats;
