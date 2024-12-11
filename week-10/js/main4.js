let numsAndStrings = [1, 10, -10, -20, 5, "A", 3, "B", "C"];

let onlyNumbers = numsAndStrings
  .map((element) => (!isNaN(parseInt(element)) ? -element : ""))
  .filter((element) => typeof element !== typeof "String");

console.log(onlyNumbers); // [-1, -10, 10, 20, -5, -3]
