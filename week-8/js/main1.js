function sayHello(theName, theGender) {
  // Your Code Here
  if (theGender === "Male") {
    return `Hello Mr ${theName}`;
  }
  if (theGender === "Female") {
    return `Hello Miss ${theName}`;
  }
  if (theGender === undefined) {
    return `Hello ${theName}`;
  }
}
// Needed Output
console.log(sayHello("Osama", "Male")); // "Hello Mr Osama"
console.log(sayHello("Eman", "Female")); // "Hello Miss Eman"
console.log(sayHello("Sameh")); // "Hello Sameh"
