let myArray = ["E", "l", "z", ["e", "r"], "o"];

let newArray = myArray
  .reduce((acc, current) => acc.concat(current), [])
  .join("");

console.log(newArray); // Elzero
