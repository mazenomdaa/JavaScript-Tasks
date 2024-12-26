let chosen = 3;

let myFriends = [
  { title: "Osama", age: 39, available: true, skills: ["HTML", "CSS"] },
  { title: "Ahmed", age: 25, available: false, skills: ["Python", "Django"] },
  { title: "Sayed", age: 33, available: true, skills: ["PHP", "Laravel"] },
];

// Write Your Code Here
// If chosen === 1
if (chosen === 1) {
  let [
    {
      title: t1,
      age: a1,
      available: av1,
      skills: [, s12],
    },
    {
      title: t2,
      age: a2,
      available: av2,
      skills: [, s22],
    },
    {
      title: t3,
      age: a3,
      available: av3,
      skills: [, s32],
    },
  ] = myFriends;
  console.log(`${t1}`);
  console.log(`${a1}`);
  console.log(`${av1 ? "Available" : "Not Available"}`);
  console.log(`${s12}`);
}
// ("Osama");
// 39;
// ("Available");
// ("CSS");

// If chosen === 2
if (chosen === 2) {
  let [
    {
      title: t1,
      age: a1,
      available: av1,
      skills: [, s12],
    },
    {
      title: t2,
      age: a2,
      available: av2,
      skills: [, s22],
    },
  ] = myFriends;
  console.log(`${t2}`);
  console.log(`${a2}`);
  console.log(`${av2 ? "Available" : "Not Available"}`);
  console.log(`${s22}`);
}
// ("Ahmed");
// 25;
// ("Not Available");
// ("Django");

// If chosen === 3
if (chosen === 3) {
  let [
    {
      title: t1,
      age: a1,
      available: av1,
      skills: [, s12],
    },
    {
      title: t2,
      age: a2,
      available: av2,
      skills: [, s22],
    },
    {
      title: t3,
      age: a3,
      available: av3,
      skills: [, s32],
    },
  ] = myFriends;
  console.log(`${t3}`);
  console.log(`${a3}`);
  console.log(`${av3 ? "Available" : "Not Available"}`);
  console.log(`${s32}`);
}
// ("Sayed");
// 33;
// ("Available");
// ("Laravel");
