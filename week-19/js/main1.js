class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  run() {
    return `Car Is Running Now`;
  }

  stop() {
    return `Car Is Stopped`;
  }
}

let car1 = new Car("MG", 2022, 420000);
let car2 = new Car("BMW", 2021, 520000);
let car3 = new Car("Mercedes", 2020, 620000);

// Needed Output
console.log(
  `Car One Name Is ${car1.n} And Model Is ${car1.m} And Price Is ${car1.p}`
); //("Car One Name Is MG And Model Is 2022 And Price Is 420000");

console.log(car1.run()); //"Car Is Running Now"
