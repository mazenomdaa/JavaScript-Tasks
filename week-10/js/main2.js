let myString = "EElllzzzzzzzeroo";

let noRepeat = myString
  .split("")
  .filter((letter, index, self) => self.indexOf(letter) === index)
  .join("");

console.log(noRepeat); // Elzero
