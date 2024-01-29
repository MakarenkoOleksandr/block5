function calc(a, b, operator) {
  if (b === "+" || b === "-") {
    operator = b;
    b = 0;
  } else if (b === "*" || b === "/") {
    operator = b;
    b = 1;
  } else "wrong data provided";

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
