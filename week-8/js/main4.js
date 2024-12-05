function checkStatus(a, b, c) {
  // Your Code Here
  let name, age, status;

  [a, b, c].forEach((input) => {
    if (typeof input === typeof "string") {
      name = input;
    }
    if (typeof input === typeof 1) {
      age = input;
    }
    if (typeof input === typeof true) {
      status = input;
    }
  });
  const availability = status ? "Available" : "Not Available";
  console.log(
    `Hello ${name}, Your Age Is ${age}, You Are ${availability} For Hire`
  );
}

// Needed Output
checkStatus("Osama", 38, true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(38, "Osama", true); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(true, 38, "Osama"); // "Hello Osama, Your Age Is 38, You Are Available For Hire"
checkStatus(false, "Osama", 38); // "Hello Osama, Your Age Is 38, You Are Not Available For Hire"
