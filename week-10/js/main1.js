let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let ignoreNumbers = mix
  .map((element) => (isNaN(parseInt(element)) ? element : ""))
  .reduce((acc, current) => `${acc}${current}`);

console.log(ignoreNumbers); // Elzero
