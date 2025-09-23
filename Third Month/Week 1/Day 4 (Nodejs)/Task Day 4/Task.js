const http = require("http");
const server = http.createServer((req, res) => {
    let result = getOperation(req.url)
    res.end(JSON.stringify({ result }))
}).listen(3000, () => {
    console.log("Server is Running")
})

function getOperation(url) {
    let sum = 0;
    console.log(url);
    let splittedUrl = url.split("/").filter(Boolean)
    const numbers = splittedUrl.slice(1).map(Number);

    switch (splittedUrl[0]) {
        case "add":
            return numbers.reduce((acc, n) => acc + n, 0);
        case "sub":
            return numbers.reduce((acc, n) => acc - n);
        case "div":
            return numbers.reduce((acc, n) => acc / n);
        case "mul":
            return numbers.reduce((acc, n) => acc * n, 1);
        default:
            return "Unknown operation";
    }
}