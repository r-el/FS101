function safeCalculator(a, b, operation) {
  if (typeof a !== typeof b) throw new Error("Both operands must be of the same type");

  if (typeof a !== "number" || typeof b !== "number")
    throw new Error("Operands must be numbers");

  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "multiply":
      return a * b;
    case "divide":
      if (b === 0) throw new Error("Division by zero");
      return a / b;
    default:
      throw new Error("Unknown operation");
  }
}

module.exports = safeCalculator;
