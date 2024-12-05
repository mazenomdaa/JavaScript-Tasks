function multiply(...num) {
  let result = 1;

  for (let i = 0; i < num.length; i++) {
    if (typeof num[i] === typeof 1) {
      result *= Math.floor(num[i]);
    }
  }
  return result;
}
console.log(multiply(10, 20)); // 200
console.log(multiply("A", 10, 30)); // 300
console.log(multiply(100.5, 10, "B")); //1000
