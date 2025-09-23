const http = require("http");
const fs = require("fs");
const port = 7000;

let htmlContent = "";

fs.readFile("../Html/main.html", (err, data) => {
  err ? console.log(err) : (htmlContent = data.toString());
});

let welcomeHtml = "";
fs.readFile("../Html/welcome.html", (err, data) => {
  err ? console.log(err) : (welcomeHtml = data.toString());
});
let java = "";
fs.readFile("../Java/App.js", (err, data) => {
  err ? console.log(err) : (java = data.toString());
});

let cssMain = ""
fs.readFile("../Css/main.css", (err, data) => {
  err ? console.log(err) : (cssMain = data.toString());
})


const server = http
  .createServer((req, res) => {
    if (req.method === "GET") {
      switch (req.url) {
        case "/":
        case "/main.html":
          res.setHeader("content-type", "text/html");
          res.write(htmlContent);
          break;
        case "/Css/main.css":
          res.setHeader("content-type", "text/css");
          res.write(cssMain);
          break;
        case "/Java/App.js":
          res.setHeader("content-type", "text/javascript");
          res.write(java);
          break;
        case "/welcome.html":
          res.setHeader("content-type", "text/html");
          res.write(welcomeHtml);
          break;
        case "/params_data.json":
          res.setHeader("content-type", "application/json");
          try {
            const data = fs.readFileSync("params_data.json", "utf-8");
            res.write(data);
          } catch (err) {
            res.write("[]");
          }
          break;
        default:
          res.writeHead(404);
          res.write("Not Found");
          break;
      }
      res.end();
    } else if (req.method === "POST") {
      req.on("data", async (data) => {
        let params = new URLSearchParams(data.toString());
        let responseHtml = welcomeHtml
          .replace("{clientName}", params.get("name"))
          .replace("{ MobileNumber }", params.get("mobile"))
          .replace("{ Email }", params.get("email"))
          .replace("{ Address }", params.get("addr"));
        res.write(responseHtml);
        let dataOfUSer = {};
        params.forEach((value, key) => {
          dataOfUSer[key] = value;
        });
        let users = [];
        try {
          const fileData = fs.readFileSync("params_data.json", "utf-8");
          users = JSON.parse(fileData);
        } catch (err) {
          users = [];
        }
        users.push(dataOfUSer);
        fs.writeFile(
          "params_data.json",
          JSON.stringify(users, null, 2),
          (err) => {
            if (err) console.error("Error writing file:", err);
            else console.log("Data saved to params_data.json");
          }
        );
      });
      req.on("error", (err) => {
        console.log(err);
      });
      req.on("end", () => {
        res.end();
      });
    }
  })
  .listen(port, () => {
    console.log("Serve is Running");
  });
