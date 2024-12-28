let myInfo = {
  username: "Osama",
  role: "Admin",
  country: "Egypt",
};

// Convert object to map using Object.entries
let myMap = new Map(Object.entries(myInfo));

console.log(myMap);
console.log(myMap.size);
console.log(myMap.has("role"));

// Another way to convert object to map using forEach
let myNewMap = new Map();
Object.keys(myInfo).forEach((key) => {
  myNewMap.set(key, myInfo[key]);
});

console.log(myNewMap);
console.log(myNewMap.size);
console.log(myNewMap.has("role"));
