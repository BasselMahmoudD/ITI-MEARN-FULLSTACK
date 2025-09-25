// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
//   fname?: string;
//   address: IAddress; //{ street: string;  city: string; }
// }
// interface IAddress {
//   street: string;
//   city: string;
// }
// interface IEmployee extends IPerson {
//   readonly id: number | string;
//   salary: number;
// }
// let employee: IEmployee = {
//   id: "1",
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
//   salary: 50000,
//   address: {
//     street: "Main St",
//     city: "New York",
//   },
// };
//employee.id = "2"; // Error: Cannot assign to 'id' because it is a read-only property
// let user1: IPerson = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },

// };
// user1.greet("Hi there - I am");
// class Person implements IPerson {
//   name: string;
//   age: number;

//   constructor(n: string, a: number) {
//     this.name = n;
//     this.age = a;
//   }

//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }
// let user2 = new Person("Max", 30);
// user2.greet("Hello - I am");
//generics interface -------------------
// interface Manager<T> {
//   employees: T[];
//   addEmployee(employee: T): void;
//   removeEmployee(employee: T): void;
// }
// let m: Manager<string> = {
//   employees: [],
//   addEmployee(employee: string) {
//     this.employees.push(employee);
//   },
//   removeEmployee(employee: string) {
//     this.employees = this.employees.filter((emp) => emp !== employee);
//   },
// };
// let m2: Manager<{ name: string; age: number }> = {
//   employees: [],
//   addEmployee(employee: { name: string; age: number }) {
//     this.employees.push(employee);
//   },
//   removeEmployee(employee: { name: string; age: number }) {
//     this.employees = this.employees.filter((emp) => emp !== employee);
//   },
// };
// interface IKeyValueProcessor<K, V> {
//   process(key: K, value: V): void;
// }
// let kvp: IKeyValueProcessor<number, string> = {
//   process(key: number, value: string) {
//     console.log(`Key: ${key}, Value: ${value}`);
//   },
// };
// kvp.process(1, "One");
// let kvp2: IKeyValueProcessor<string, string> = {
//   process(key: string, value: string) {
//     console.log(`Key: ${key}, Value: ${value}`);
//   },
// };
// kvp2.process("One", "1");
// //--------------------------------
// interface IPerson {
//   name: string;
//   age: number;
//   greet(phrase: string): void;
//   fname?: string;
//   address: IAddress; //{ street: string;  city: string; }
// }
// interface IAddress {
//   street: string;
//   city: string;
// }
// interface IEmployee extends IPerson {
//   readonly id: number | string;
//   salary: number;
// }
// interface IManager extends IEmployee {
//   department: string;
// }
// class Employee implements IEmployee {
//   readonly id: number | string;
//   name: string;
//   age: number;
//   salary: number;
//   address: IAddress;

//   constructor(
//     id: number | string,
//     name: string,
//     age: number,
//     salary: number,
//     address: IAddress
//   ) {
//     this.id = id;
//     this.name = name;
//     this.age = age;
//     this.salary = salary;
//     this.address = address;
//   }
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   }
// }
// let emp = new Employee(1, "Max", 30, 50000, {
//   street: "Main St",
//   city: "New York",
// });
// emp.greet("Hello - I am");
// class Manager extends Employee implements IManager {
//   department: string;
//   static create(manager: IManager): Manager {
//     return new Manager(
//       manager.id,
//       manager.name,
//       manager.age,
//       manager.salary,
//       manager.address,
//       manager.department
//     );
//   }
//   private static icount = 0;
//   static get count() {
//     return this.icount;
//   }

//   constructor(
//     id: number | string,
//     name: string,
//     age: number,
//     salary: number,
//     address: IAddress,
//     department: string
//   ) {
//     super(id, name, age, salary, address);
//     this.department = department;
//     Manager.icount++;
//   }
// }
// let mgr = new Manager(
//   2,
//   "Anna",
//   35,
//   80000,
//   { street: "2nd St", city: "Boston" },
//   "IT"
// );
// mgr.greet("Hello - I am");
// console.log(mgr.department);
// let mgr2 = Manager.create({
//   id: 3,
//   name: "John",
//   age: 40,
//   salary: 90000,
//   address: { street: "3rd St", city: "Chicago" },
//   department: "HR",
//   greet(phrase: string) {
//     console.log(phrase + " " + this.name);
//   },
// });
// console.log(Manager.count);
// //mgr2.id=5;//Error: Cannot assign to 'id' because it is a read-only property
// class Department {
//   // id: number;
//   private name: string;
//   protected location: string;
//   constructor(public id: number, name: string, location: string) {
//     this.id = id;
//     this.name = name;
//     this.location = location;
//   }
//   Getname() {
//     return this.name;
//   }
//   getLocation() {
//     return this.location;
//   }
// }
// class HRDepartment extends Department {
//   constructor(id: number, location: string) {
//     super(id, "HR", location);
//   }
//     getDeptLocation() {
//     return this.location;
//   }
// }
// let dep = new Department(1, "IT", "Building A");
//console.log(dep.name); //Error: Property 'name' is private and only accessible within class 'Department'.
//console.log(dep.location); //Error: Property 'location' is protected and only accessible within class 'Department
//---------------------------
export namespace Animals {
  export class Animal {
    constructor(public name: string) {
      this.name = name;
    }
    //   abstract makeSound(): void;
    move(): void {
      console.log(`${this.name} is moving.`);
    }
  }
  export class Bird extends Animal {
    fly(): void {
      console.log(`${this.name} is flying.`);
    }
  }
}
