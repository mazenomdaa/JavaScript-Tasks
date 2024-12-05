let start = 0;
let swappedName = "elZerO";

let result = "";

for (start; start < swappedName.length; start++) {
  if (swappedName[start] === swappedName[start].toUpperCase()) {
    result += swappedName[start].toLowerCase();
  } else {
    result += swappedName[start].toUpperCase();
  }
  console.log(result);
}

// Output
("ELzERo");
