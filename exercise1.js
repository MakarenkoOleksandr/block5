function calc(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;
    case "-":
      return a - b;
    case "*":
      return a * b;
    case "/":
      return b !== 0 ? a / b : "divion by 0 is prohibited";
    default:
      return "wrong data provided";
  }
}

module.exports = {
  calc,
};
