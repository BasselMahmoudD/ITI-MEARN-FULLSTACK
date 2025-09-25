// import { Animal, Bird } from "./day2";
// class Dog extends Animal {
//   bark() {
//     console.log("Woof! Woof!");
//   }
// }
// let dog = new Dog("Buddy");
// dog.move();
// dog.bark();
// let b = new Bird("Parrot");
// b.move();
// b.fly();
//// <reference path="./day2.ts" />
// import { Animals } from "./day2";
// //namespace Animals {
// export class Dog extends Animals.Animal {
//   bark() {
//     console.log("Woof! Woof!");
//   }
// }
//}

// Usage example:
// let dog = new Animals.Dog("Buddy");
// dog.move();
// dog.bark();
function classLog(constructor: Function) {
  console.log("Class decorator called on:", constructor);
}
@classLog
class Employee {
  constructor(public id: number, public name: string) {
    this.id = id;
    this.name = name;
  }
}
let emp = new Employee(1, "Alice");
let emp2 = new Employee(1, "Alice");
