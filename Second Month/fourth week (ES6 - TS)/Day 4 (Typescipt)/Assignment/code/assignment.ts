// let str: string = "hello";
// let num: number = 42;
// let bool: boolean = true;
// let arr: number[] = [1, 2, 3];
// console.log(str, num, bool, arr);

// /////////////////////////////
// let mixedArr: (string | number)[] = ["text", 100, "more text", 200];
// function printArrayElements(arr: (string | number)[]): void {
//   arr.forEach((item) => {
//     console.log(`Type: ${typeof item}, Value: ${item}`);
//   });
// }
// printArrayElements(mixedArr);
// /////////////////////////////
// enum TrafficLight {
//   Red,
//   Yellow,
//   Green,
// }

// function getAction(color: TrafficLight): string {
//   switch (color) {
//     case TrafficLight.Red:
//       return "Stop";
//     case TrafficLight.Yellow:
//       return "Get Ready";
//     case TrafficLight.Green:
//       return "Go";
//     default:
//       return "Invalid light";
//   }
// }

// console.log(getAction(TrafficLight.Red));
// console.log(getAction(TrafficLight.Yellow));
// console.log(getAction(TrafficLight.Green));

/////////////////////////////

enum Role {
  Admin,
  User,
  Guest,
}

let userInfo: [id: number, name: string, role: Role] = [1, "bassel", Role.Admin];

function describeUser(user: [number, string, Role]): void {
  let roleName: string;
  switch (user[2]) {
    case Role.Admin:
      roleName = "Admin";
      break;
    case Role.User:
      roleName = "User";
      break;
    case Role.Guest:
      roleName = "Guest";
      break;
    default:
      roleName = "Unknown";
  }
  console.log(`User ${user[1]} has role: ${roleName}`);
}
describeUser(userInfo);

/////////////////////////////

function format(word: string | number): string {
  if (typeof word === "string") {
    return word.toUpperCase();
  } else if (typeof word === "number") {
    return `$${word}`;
  } else {
    throw new Error("Invalid type");
  }
}
console.log(format("hello")); 
console.log(format(42)); 


/////////////////////////////


let input: unknown = "typescript"; 

function processInput(value: unknown): void {
  if (typeof value === "string") {
    console.log(value.toUpperCase());
  } else if (typeof value === "number") {
    console.log(value * value);
  }
}
processInput(input);
input = 7;
processInput(input);

