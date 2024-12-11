function getDetails(zName, zAge, zCountry) {
  function namePattern(zName) {
    let name = zName.split(" ");
    let fName = name[0];
    let lName = name[1];
    return `Hello ${fName} ${lName.charAt(0).toUpperCase()}.`;
  }
  function ageWithMessage(zAge) {
    let age = zAge.split(" ")[0];
    return `Your Age Is ${age}`;
  }
  function countryTwoLetters(zCountry) {
    let country = zCountry.slice(0, 2).toUpperCase();
    return `You Live In ${country}`;
  }
  function fullDetails() {
    return `${namePattern(zName)}, ${ageWithMessage(zAge)}, ${countryTwoLetters(
      zCountry
    )}`;
  }
  return fullDetails(); // Do Not Edit This
}

console.log(getDetails("Osama Mohamed", "38 Is My Age", "Egypt"));
// Hello Osama M., Your Age Is 38, You Live In EG

console.log(getDetails("Ahmed ali", "32 Is The Age", "Syria"));
// Hello Ahmed A., Your Age Is 32, You Live In SY
