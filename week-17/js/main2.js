let myFriends = ["Osama", "Ahmed", "Sayed", "Sayed", "Mahmoud", "Osama"];

let uniqueFriends = [...new Set(myFriends)];
console.log(uniqueFriends); // ["Osama", "Ahmed", "Sayed", "Mahmoud"]
