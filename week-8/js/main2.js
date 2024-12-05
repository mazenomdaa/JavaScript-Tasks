function calculate(firstNum, secondNum, operation) {
  // Your Code Here
  if (firstNum === undefined || secondNum === undefined) {
    return `Second Number Not Found`;
  }
  if (operation === undefined) {
    return firstNum + secondNum;
  }
  if (operation === `add`) {
    return firstNum + secondNum;
  }
  if (operation === `subtract`) {
    return firstNum - secondNum;
  }
  if (operation === `multiply`) {
    return firstNum * secondNum;
  }
}

// Needed Output
console.log(calculate(20)); // Second Number Not Found
console.log(calculate(20, 30)); // 50
console.log(calculate(20, 30, "add")); // 50
console.log(calculate(20, 30, "subtract")); // -10
console.log(calculate(20, 30, "multiply")); // 600
