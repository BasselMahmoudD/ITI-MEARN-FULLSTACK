var userName = document.querySelector("#user");
var password = document.querySelector("#pass");
var p = document.querySelector("#title");
console.log(userName.value);
var btn = document.querySelector("#btn");
btn.addEventListener("click", () => {
  var obj = {
    name: userName.value,
    password: password.value,
  };

  if (obj.name == "admin" && obj.password == "123") {
    p.innerText = "Welcome"
  } else {
    p.innerText = "Not registered"
  }
});

/////////////////////////////////////Q2

// var tasks = [];

// function renderTasks() {
//   var taskList = document.getElementById("taskList");
//   taskList.innerHTML = "";

//   for (var i = 0; i < tasks.length; i++) {
//     var task = tasks[i];
//     var li = document.createElement("li");
//     if (task.status === "done") {
//       li.className = "done";
//     }

//     li.innerHTML =
//       "<span>" +
//       task.name +
//       "</span>" +
//       '<div class="buttons">' +
//       '<button class="done-btn" onclick="markDone(' +
//       i +
//       ')">&#10003;</button>' +
//       '<button class="delete-btn" onclick="deleteTask(' +
//       i +
//       ')">&#10005;</button>' +
//       "</div>";

//     taskList.appendChild(li);
//   }
// }

// function addTask() {
//   var input = document.getElementById("taskInput");
//   var taskName = input.value.trim();

//   if (taskName !== "") {
//     tasks.push({ name: taskName, status: "pending" });
//     input.value = "";
//     renderTasks();
//   } else {
//     alert("Please enter a task name");
//   }
// }

// function markDone(index) {
//   tasks[index].status = "done";
//   renderTasks();
// }

// function deleteTask(index) {
//   tasks.splice(index, 1);
//   renderTasks();
// }
