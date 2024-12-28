let theNumber = 100020003000;

let newNumber = new Set(
  Array.from(`${theNumber}`).filter((item) => item !== "0")
);

console.log(...newNumber);
// Needed Output 123;
