function ageInTime(theAge) {
  // Your Code Here
  if (theAge <= 10 || theAge >= 100) {
    return `Age Out Of Range`;
  }
  months = theAge * 12;
  weeks = theAge * 52;
  days = theAge * 365;
  hours = days * 24;
  minutes = hours * 60;
  seconds = minutes * 60;

  console.log(`${months} Months`);
  console.log(`${weeks} Weeks`);
  console.log(`${days} Days`);
  console.log(`${hours} Hours`);
  console.log(`${minutes} Minutes`);
  console.log(`${seconds} Seconds`);
}

// Needed Output
console.log(ageInTime(110)); // Age Out Of Range
console.log(ageInTime(38)); // Months Example => 456 Months
