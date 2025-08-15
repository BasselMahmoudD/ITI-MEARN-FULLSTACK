////////////////////////////////////Lab1
//2 (e.g., “JavaScript is used to make web pages interactive”).
//3
// common uses of JavaScript
// form validation
// animations
// dynamic content

//4
//5 this log to display my name and age and my favorite language
// console.log( "Bassel mahmoud 22 javascript" );

/////////////////////////////////////lab2

//1 - 2
// try {
//     var FirstName = "Bassel";
//     var lName = "Mahmoud";
//     var age = 22;
//     var is_Student = true;

//     //3

//     var 123name = "alksd";
//     var first-name = "cxbvx";
//     var le = "fdgdf";

//     //4
//     console.log(FirstName , lName , age , is_Student);

// }
// catch(e) {
//     console.log(e);
// }

//////////////////////////////////////lab3

//1
// var grade = prompt( "Enter numerical grade" );
// //2
// if (grade <=100 && grade >=90) {
//     alert("Excellent");
// } else if ( grade <= 89 && grade >= 75 ) {
//     alert("Good");
// } else if ( grade <= 74 && grade >= 60 ) {
//     alert("Pass");
// } else {
//     alert("Fail");
// }

//////////////////////////////////////lab4

//1
var randomPrice = Math.random() * 100;
if (randomPrice < 10) {
  randomPrice *= 10;
}
console.log(randomPrice.toFixed(2));

//////////////////////////////////////lab5

//1
// var productName = prompt( "Enter product name:" );
// //2
// console.log(productName.includes("h"));
// ///
// console.log(productName.toLowerCase());

//////////////////////////////////////lab6
//1
// var date = new Date();
// //2
// date.setDate(date.getDate() + 3);
// console.log(date.toDateString());

//////////////////////////////////////lab7
// var password = "123456";
// var count = 0;
// do {
//   var pass = prompt("Enter the password in 3 attempts :");
//   count++;
// } while (pass != password && count < 3);

//////////////////////////////////////lab8

// for (var i = 0; i < 50; i++) {
//   if (i % 2 == 0) {
//     continue;
//   } else if (i == 37) {
//     break;
//   } else {
//     console.log(i);
//   }
// }

//////////////////////////////////////lab9

// var num = prompt("Enter a number :");
// for (var i = 0; i <= 4; i++) {
// var star=""
//   for (var j = 0; j <= i; j++) {
//     star+="*"
//   }
//   console.log(star);

// }

//////////////////////////////////////lab10

// var amount = prompt("Enter a initial value :");
// amount = parseFloat(amount)
// var taxRate = 0.15;

// amount += amount * taxRate;

// var discount = 0.10;

// amount -= amount * discount;
// console.log(amount.toFixed(2));

//////////////////////////////////////lab11

// var password = prompt("Enter a password :");
// var hasChar = /[a-zA-Z]/.test(password);
// var hasNum = /[0-9]/.test(password);
// for (var i = 0; i < password.length; i++) {
//   if (hasChar && hasNum && password.length >= 8) {
//     alert("Strong Password");

//   } else {
//     alert("weak password");
//   }
// }
//////////////////////////////////////lab12

// for(var i = 0 ; i < 5 ; i++){
//     console.log("PROMO" + (Math.random()*10000).toFixed());
// }

//////////////////////////////////////lab13

// (function (x){
//     var variable = x;
//     console.log(variable);
// })(25)

//////////////////////////////////////lab14

// try {
//   var num1 = +prompt("Enter number 1 :");
//   var num2 = +prompt("Enter number 2 :");
//   var operation = prompt("Enter operation EX:+*-/ :");
//   var result;

//   if (typeof num1 != "number" || typeof num2 != "number") {
//     switch (operation) {
//       case "+":
//         result = num1 + num2;
//         break;
//       case "-":
//         result = num1 - num2;
//         break;
//       case "/":
//         if (num2 === 0) {
//           throw new Error("Cannot divide by 0");
//         }
//         result = num1 / num2;
//         break;
//       case "*":
//         result = num1 * num2;
//         break;
//       default:
//         console.error("Invalid operation");
//         break;
//     }
//   } else {
//     alert("Invalid input");
//   }
// } catch (e) {
//   alert(e.message);
// } finally {
//   alert(result);
// }
