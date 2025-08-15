//Q1
// var car = {
//   brand: "Toyota",
//   model: "Corolla",
//   year: "2020",
//   start: function () {
//     console.log("Car started");
//   },
// };
// //Q2
// for (var k in car) {
//   console.log(k + ": " + car[k]);
// }
//Q3

function swapped(obj) {
  var keys = Object.keys(obj);
  var values = Object.values(obj);
  var newObj = {};

  for (var i = 0; i < values.length; i++) {
    newObj[values[i]] = keys[i];
  }
  console.log(newObj);
}
var obj = {
  brand: "Toyota",
  model: "Corolla",
  year: "2020",
};
swapped(obj);
//Q4
// var person = {
//   address: {
//     city: "Cairo",
//     district: "Ain shams",
//   },
//   job: {
//     title:"CEO",
//     place:"egypt"
//   },
//   display: function () {
//     console.log("This is person obj");
//   },
// };

//Q5

// var arrObj = [{fName:"basel" , age:"20"},{fName:"omar" , age:"15"},{fName:"mahmoud" , age:"25"}]
// var sortedArr = arrObj.sort((a , b) => a.age - b.age )
// console.log(sortedArr);

//Q6

// var numbers = [2, 5, 8, 1, 10, 20, 99, 80];

// function findMaxMin(arr) {
//   let newArr = arr.sort((a, b) => a - b);
//   let max = newArr[newArr.length-1];
//   let min = newArr[0];
//   console.log("Max number is : " + max ," , Min numbers is : " + min);
// }
// findMaxMin(numbers)

//Q7

// var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var newArr = [];
// for (var i = arr.length - 1; i >= 0; i--) {
//   newArr.push(arr[i]);
// }
// console.log(newArr);

//Q8

// var product = [
//   { name: "Phone", price: 2000 },
//   { name: "Tv", price: 1500 },
//   { name: "carpet", price: 1000 },
// ];

// product.forEach((x) => {
//   x.discountPrice = x.price * 0.1;
// });
// console.log(product);

//Q9

// var date = new Date("7/25/2025");

// function weekName(date){
// var newArr = date.split(" ");
// console.log(newArr[0]);
// }

// weekName(date.toDateString());

//Q10

// var number1 = prompt("Enter numbers like 1,2,5,7, :");
// var number2 = prompt("Enter numbers like 1,2,5,7, :");
// var arr1 = number1.split(",").map(number);
// var arr2 = number2.split(",").map(number);
// var resultArr = [];
// resultArr = resultArr.concat(arr2);
// var count = 0;
// for (var i = 0; i < arr1.length; i++) {
//   for (var j = 0; j < resultArr.length; j++) {
//     count = j;
//     if (arr1[i] === resultArr[j]) {
//       break;
//     }
//     if (count == resultArr.length - 1) {
//       resultArr.push(arr1[i]);
//     }
//   }
// }
// console.log(resultArr);

////Another answer

// let input1 = prompt("Enter numbers like 1,6,5,9,1,2:");
// let input2 = prompt("Enter numbers like 5,6,3,1,9:");
// let arr1 = input1.split(',').map(Number);
// let arr2 = input2.split(',').map(Number);
// let merged = arr1.concat(arr2);
// let unique = [];
// for (let i = 0; i < merged.length; i++) {
//     if (!unique.includes(merged[i])) {
//         unique.push(merged[i]);
//     }
// }
// alert("Merged array without duplicates: " + unique);
// console.log("Result:", unique);

//Q11

// var contacts = [];

// do {
//   var operation = prompt("Enter the operation :");
//   switch (operation) {
//     case "add":
//       var name = prompt("Enter name of contact :");
//       var phone = prompt("Enter phone of contact :");
//       var obj = { name: name, phone: phone };
//       contacts.push(obj);
//       console.log(contacts);
//       break;
//     case "search":
//       var found = false;
//       var search = prompt("Enter something to search in contact :");
//       contacts.forEach((e) => {
//         if (search == e.name || search == e.phone) {
//           alert("Name: " + e.name + "\nPhone: " + e.phone);
//           found = true;
//         }
//       });
//       if (!found) {
//         alert("No contact found with this input.");
//       }
//       break;
//     case "end":
//       alert("Exiting phone book app. Bye!");
//       break;
//     default:
//       console.log("something Error");
//       break;
//   }
// } while (operation !== "end");
