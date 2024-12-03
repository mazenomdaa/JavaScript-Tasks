let num = "10";

// Solution One
console.log(+num + +num); // 10 + 10 =20

// Solution Two
console.log(num * true + num * true); // 10 * 1 + 10 * 1 = 20

// Solution Three
console.log(num * (true+true)); // 10 * 2 = 20

// Solution Four
console.log(parseInt(num) + parseInt(num)); 