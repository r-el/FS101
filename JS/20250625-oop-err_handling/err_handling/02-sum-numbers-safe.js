const extractNumbers = require("./01-extract-numbers");

function sumNumbersSafe(arr) {
  try {
    return extractNumbers(arr).reduce((sum, n) => sum + n, 0);
  } catch (e) {
    console.warn("Warning:", e.message);
    return 0;
  }
}

module.exports = sumNumbersSafe;
