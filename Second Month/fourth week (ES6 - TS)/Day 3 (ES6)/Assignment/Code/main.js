import { Employee } from "./Classes/Employee.js";
import { WorkerBee } from "./Classes/WorkerBee.js";
import { Engineer } from "./Classes/Engineer.js";
import { SalesPerson } from "./Classes/SalesPerson.js";
import { Manager } from "./Classes/Manager.js";

//Test Employee

// let emp1 = new Employee("Bassel", "Is");
// let emp2 = new Employee("omar");

// console.log("Employee1 :", emp1);
// console.log("Employee1 :", emp2);
// console.log("-------------------End-----------------");

// //Test Manager

// let manger1 = new Manager("mahmoud", "IT", [emp1, emp2]);
// let manger2 = new Manager("mahmoud",[emp1, emp2]);
// let manger3 = new Manager("mahmoud", "IT");

// console.log("Manager1 :", manger1);
// console.log("Manager2 :", manger2);
// console.log("Manager3 :", manger3);
// console.log("-------------------End-----------------");

// // // Test WorkerBee

// let woreker1 = new WorkerBee("Ali" , "IS" , ["project1" , "project2"])
// let woreker2 = new WorkerBee("Ahmed" , ["project1" , "project2"])
// let woreker3 = new WorkerBee( "Ali", "IS" );

// console.log("woreker1 :", woreker1);
// console.log("woreker2 :", woreker2);
// console.log("woreker3 :", woreker3);
// console.log("-------------------End-----------------");

// // // Test SalesPerson

// let salesPerson1 = new SalesPerson("Osama",  ["project1", "project2"] , 20);
// let salesPerson2= new SalesPerson("Bahaa", ["project1", "project2"]);
// let salesPerson3 = new SalesPerson( "Abdo", [ "project1", "project2" ], 13 );

// console.log("salesPerson1 :", salesPerson1);
// console.log("salesPerson2 :", salesPerson2);
// console.log("salesPerson3 :", salesPerson3);
// console.log("-------------------End-----------------");

// // // Test SalesPerson

// let engineer1 = new Engineer("Osama", ["project1", "project2"], "machine1");
// let engineer2 = new Engineer("Bahaa", ["project1", "project2"]);
// let engineer3 = new Engineer( "Abdo", [ "project1", "project2" ], "machine2" );

// console.log(engineer1);
// console.log(engineer2);
// console.log(engineer3);
// console.log("-------------------End-----------------");

////////////////////Fetch Data

async function getUser() {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/users");
    let users = await data.json();
    return users;
  } catch (error) {
    console.log(error);
  }
}

async function getPosts(id) {
  try {
    let userId = id;
    let data = await fetch(
      `https://jsonplaceholder.typicode.com/users/${userId}/posts`
    );
    let posts = await data.json();
    return posts;
  } catch (error) {
    console.log(error);
  }
}

//////////////////Display layout
async function displayUsersAndPosts() {
  let usersData = await getUser();
  const container = document.createElement("ol");
  for (const user of usersData) {
    const userLi = document.createElement("li");
    userLi.textContent = user.name + " |";
    let postsData = await getPosts(user.id);
    const postsUl = document.createElement("ul");
    for (const post of postsData) {
      const postLi = document.createElement("li");
      postLi.textContent = "-" + post.title;
      postsUl.appendChild(postLi);
    }
    userLi.appendChild(postsUl);
    container.appendChild(userLi);
  }
  document.body.appendChild(container);
}
displayUsersAndPosts();
