function specialMix(...data) {
  let total = 0;
  for (let item of data) {
    let number = parseInt(item);
    if (!isNaN(number)) total += number;
  }
  if (total === 0) {
    return `All Is Strings`;
  }

  return total;
}

console.log(specialMix(10, 20, 30)); // 60
console.log(specialMix("10Test", "Testing", "20Cool")); // 30
console.log(specialMix("Testing", "10Testing", "40Cool")); // 50
console.log(specialMix("Test", "Cool", "Test")); // All Is Strings
