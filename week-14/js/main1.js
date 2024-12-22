function printNumbersRange() {
  let promptMsg = prompt(`Print Numbers From - To`, `example: 5-20`);

  if (!promptMsg || !promptMsg.includes("-")) {
    document.write(`invalid input.`);
  }

  let [num1, num2] = promptMsg.split("-").map(Number);

  if (isNaN(num1) || isNaN(num2)) {
    document.write(
      `
      Please enter two valide numbers in the format: num1-num2`
    );
  }

  let firstNum = Math.min(num1, num2);
  let LastNum = Math.max(num1, num2);

  for (let i = firstNum; i <= LastNum; i++) {
    document.write(i + `<br>`);
  }
}

printNumbersRange();
