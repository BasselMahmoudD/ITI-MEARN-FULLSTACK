
// let arr = [1, 2, 3, 5];
// let arr2 = [6, 7, 8, 9];

// //////////////////////////////////Q1

// let obj1 = {
//   name: "bassel",
//   age: 20,
//   address: { city: "cairo", street: "39 street hakem" },
// };
// for (const key in obj1) {
//   console.log(key);
// }

// ////////////////////////////////Q2

// for (const element of arr) {
//     console.log(element);
// }

// ////////////////////////////////Q3

// //Print Values

// for (const element of arr) {
//   console.log(element);
// }

// //Print Indexes

// for (const elem in arr) {
//   console.log(elem);
// }

// ////////////////////////////////Q4

// let arr3 = [ ...arr, ...arr2 ]
// console.log(arr3);

// ////////////////////////////////Q5

// let Std = {
//   name: "Ahmed",
//   faculty: "computer science",
//   university: "Helwan",
//   grade: 95,
// };

// console.log(`${Std.name} is a student in faculty of ${Std.faculty} in university ${Std.university}
// And his final grad is ${Std.grad}`);

// ////////////////////////////////Q6

// let str = "hello";
// console.log(str.includes('e'));

// ////////////////////////////////Q7

// let obj2 = {
//   name: "bassel",
//   age: 20,
//     address: { city: "cairo", street: "39 street hakem" },
//   grade:null
// };

// console.log(obj2.grade ?? 20);

// ////////////////////////////////Q8

// let obj3 = {
//   name: "bassel",
//   age: 20,
//     address: { city: "cairo", street: "39 street hakem" },
//   grade:null
// };

// console.log(obj3.address.apartment?.homeNum);

// ////////////////////////////////Q9

// let obj4 = {
//   name: "bassel",
//   age: 20,
//   address: { city: "cairo", street: "39 street hakem" },
//   grade: null,
// };

// let obj5 = { ...obj4 };
// console.log(obj5);
// obj5.name = "Omar";
// obj5.age = 35;
// console.log(obj4);
// console.log(obj5);

// ////////////////////////////////Q10

const {
  title,
  translations,
  translations: [
    {
      locale,
      last_edit,
      localization_tags,
      localization_tags: [first, sec],
      titles,
      url,
    },
    ],
  
} = {
  title: "Scratchpad",
  translations: [
    {
      locale: "de",
      localization_tags: ["de-gen", "de-or"],
      last_edit: "2014-04-14T08:43:37",
      url: "/de/docs/Tools/Scratchpad",
      titles: "JavaScript-Umgebung",
    },
  ],
};
console.log(title, locale, last_edit, localization_tags, titles, url , first , sec);

// ////////////////////////////////Q11

// let obj6 = {
//   name: "bassel",
//   age: 20,
//   address: { city: "cairo", street: "39 street hakem" },
//   grade: null,
// };
// const newArr = Object.entries( obj6 )
// console.log(newArr);
// for ( const element of newArr ) {
//     console.log(element[0].toUpperCase());
// }

// ////////////////////////////////Q12

// let a = Symbol("id");
// let obj = { [ a ]: 100, age: 30 };

// for (const key in obj) {
//   console.log(key);
// }


