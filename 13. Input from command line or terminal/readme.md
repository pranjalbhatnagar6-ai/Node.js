What is Command Line Input?
Sometimes, we want to pass values directly while running a file from the terminal — like a username or a dynamic port number.



Create File: command-line-input.js
nodemon command-line-input.js anil sidhu
This runs the file and passes "anil" and "sidhu" as input arguments.



How to Get Command Line Input
const arg = process.argv;

console.log("-------", arg);


Output:------- [
  'C:\\Program Files\\nodejs\\node.exe',
  'C:\\Users\\sheet\\OneDrive\\Desktop\\turorial\\node 2025\\command-line-input.js',
  'anil',
  'sidhu'
]
🧾 process.argv is an array:

Index 0 → Node path
Index 1 → File path
Index 2 onwards → Actual input values


Access Individual Input
console.log("-------", arg[3]);


Output:

------- sidhu
Note: Space-separated values are stored as separate elements in the array.


Example Use Case: Dynamic Port
const http = require("http");
const arg = process.argv;
const port = arg[2];

http
  .createServer((req, resp) => {
    resp.write("test input from cmd");
    resp.end();
  })
  .listen(port);


Run this from Terminal:
nodemon command-line-input.js 4100
This will start a server on port 4100.