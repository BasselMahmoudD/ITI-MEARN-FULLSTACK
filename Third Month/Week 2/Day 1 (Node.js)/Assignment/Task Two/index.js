const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
const Port = 7000;
let users = [];
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
let welcomeHtml = "";
fs.readFile("./Html/welcome.html", (err, data) => {
  err ? console.log(err) : (welcomeHtml = data.toString());
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./Html/main.html"));
});
app.get("/params_data.json", (req, res) => {
  res.sendFile(path.join(__dirname, "./params_data.json"));
});
app.post("/welcome.html", (req, res) => {
  res.write(editHtml(req.body));
  addToFile(req.body);
});
app.get("/Css/main.css", (req, res) => {
  res.sendFile(path.join(__dirname, "./Css/main.css"));
});
app.delete("/deleteUser/:id", (req, res) => {
  let { id } = req.params;
  let indexUser;
  try {
    allData = fs.readFileSync("./params_data.json", "utf-8");
  } catch (err) {
    return res.status(500).json({ error: "Could not read file." });
  }

  try {
    parsedData = JSON.parse(allData);
  } catch (err) {
    return res.status(500).json({ error: "Invalid JSON data." });
  } let user = parsedData.find((elem, index) => {
    indexUser = index;
    return elem.id == id;
  });
  if (!user) {
    return res.status(404).json({ Message: "User not found!!" })
  }
  parsedData.splice(indexUser, 1);
  writeFile(parsedData)
  return res.json({ message: "User deleted successfully." });
});
app.put("/updateUser/:id", (req, res) => {
  const { id } = req.params;
  const updatedUser = req.body;

  let fileData;
  try {
    fileData = fs.readFileSync("./params_data.json", "utf-8");
  } catch (err) {
    return res.status(500).json({ error: "Failed to read user data." });
  }

  let users;
  try {
    users = JSON.parse(fileData);
  } catch (err) {
    return res.status(500).json({ error: "Invalid JSON data." });
  }

  const userIndex = users.findIndex((user) => user.id == id);
  if (userIndex === -1) {
    return res.status(404).json({ error: "User not found." });
  }

  // Preserve ID, update other fields
  users[userIndex] = { ...users[userIndex], ...updatedUser, id: Number(id) };

  writeFile(users);
  res.json({ message: "User updated successfully." });
});


function writeFile(arr) {
  fs.writeFile("params_data.json", JSON.stringify(arr, null, 2), (err) => {
    if (err) console.error("Error writing file:", err);
    else console.log("Data saved to params_data.json");
  });
}
function editHtml(object) {
  const { name, mobile, addr, email } = object;
  let responseHtml = welcomeHtml
    .replace("{clientName}", name)
    .replace("{ MobileNumber }", mobile)
    .replace("{ Email }", email)
    .replace("{ Address }", addr);
  return responseHtml;
}
function addToFile(object) {
  try {
    const fileData = fs.readFileSync("params_data.json", "utf-8");
    users = JSON.parse(fileData);
  } catch (err) {
    users = [];
  }
  const maxId = users.reduce((max, user) => Math.max(max, user.id || 0), 0);
  object.id = maxId + 1;
  users.push(object);
  writeFile(users);
}

app.listen(Port, () => {
  console.log(`Serve is Connected on ${Port} `);
});
