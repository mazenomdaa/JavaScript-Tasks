function ageInTime(theAge) {
  // Your Code Here
  if (theAge > 80) {
    return `Age Out Of Range`;
  } else {
    return theAge * 12;
  }
}

// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(38)); // Months Example => 456 Months
