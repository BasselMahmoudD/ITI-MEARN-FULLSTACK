// ///////////////////////////////////////////////////// Q1

// var password = "p@$$";
// var userPass = prompt("Enter the Password:");
// while (userPass != password) {
//   userPass = prompt("Enter the correct Password:");
// }

// ///////////////////////////////////////////////////// Q2

// var sum = 0;
// for (var i = 0; i <= 100; i++) {
//   if (i % 2 == 0) {
//     sum += i;
//   }
// }
// console.log(sum);

// ///////////////////////////////////////////////////// Q3

function calculateTwoNumber(num1, operation, num2) {
  switch (operation) {
    case "sum":
      return num1 + num2;
    case "subtract":
      return num1 - num2;
    case "multi":
      return num1 * num2;
    case "division":
      return num1 / num2;
    default:
      return "Invalid operation";
  }
}

alert(calculateTwoNumber( 5, "sum", 4 ));


// ///////////////////////////////////////////////////// Q4

function checkEmailAndPass(name, password) {
  try {
    if (name == "admin" && password == "421$$") {
      alert("Welcome login success");
    } else if (name != "admin" && password != "421$$") {
      alert("Wrong user and password");
    } else if (name != "admin") {
      alert("User wrong");
    } else if (password != "421$$") {
      alert("Password wrong");
    }
  } catch (e) {
    throw new Error(e);
  }
}
checkEmailAndPass("admin", "21$$");

// ///////////////////////////////////////////////////// Q5

// function guessNumber(num) {
//   var random = generateRandomNumber();
//   if (num == random) {
//     console.log("You guessed the correct number");
//   } else {
//     console.log("Try again whit different random number");
//   }
// }

// function generateRandomNumber() {
//   var randomNumber = (Math.random() * 10).toFixed();
//   console.log(randomNumber);
//   return randomNumber;
// }

// var num = prompt("Guess number between 0-9 :");
// guessNumber(num);

// ///////////////////////////////////////////////////// Q6

// var date = prompt(
//   "enter the date in the following format (DD – MM – YYYY) ex. 22–01–1999"
// );

// function checkDate(date) {
//   if (date.length == 10 && date.charAt(2) == "-" && date.charAt(5) == "-") {
//     var [day, month, year] = date.split("-");
//     var newDate = new Date(year, month, day);
//     alert(newDate.toDateString());
//   } else {
//     alert("Wong Date Format");
//   }
// }
// checkDate(date);

// ///////////////////////////////////////////////////// Q7

// function dayName(day) {
//   var dayName = day.toString().slice(0, 3);
//   console.log(dayName);
// }

// var date = new Date("7/23/2025");
// dayName(date);

// /////////////////////////////////////////////////////// Q8
// var str = prompt("Enter a string :");

// let a, e, i, u, o;
// a = e = i = u = o = 0;
// for (var j = 0; j < str.length; j++) {
//   switch (str[j]) {
//     case "a":
//       a += 1;
//       break;
//     case "e":
//       e += 1;
//       break;
//     case "o":
//       o += 1;
//       break;
//     case "i":
//       i += 1;
//       break;
//     case "u":
//       u += 1;
//       break;
//     default:
//       break;
//   }
// }
// console.log(
//   "a = " + a + ", e= " + e + " ,o= " + o + " , u= " + u + " , i = " + i
// );
