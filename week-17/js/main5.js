let theName = "Elzero";

// Solution 1
console.log(Array.from(theName)); // Needed Output ["E", "l", "z", "e", "r", "o"];

// Solution 2
console.log([...theName]); // Needed Output ["E", "l", "z", "e", "r", "o"];

// Solution 3
let setName = new Set(theName);
console.log([...setName]); // Needed Output ["E", "l", "z", "e", "r", "o"];

// Solution 4
let mapName = new Map();
Array.from(theName).forEach((char) => mapName.set(char, char));
console.log([...mapName.keys()]); // Needed Output ["E", "l", "z", "e", "r", "o"];

// Solution 5
let newName = theName.split("");
console.log(newName); // ["E", "l", "z", "e", "r", "o"]
