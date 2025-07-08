function extractNumbers(arr) {
  if (!Array.isArray(arr)) throw new Error("Input must be an array");

  return arr.filter((x) => typeof x === "number" && !isNaN(x));
}

module.exports = extractNumbers;
