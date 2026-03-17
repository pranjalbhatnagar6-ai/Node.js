What Are Modules and Their Types?
Core Modules
Core modules are already available in Node.js.
You do not need to install them.
const fs = require("fs");
const os = require("os"); // import os module

fs.writeFileSync("dummy.txt", "trying with modules"); 
// Create a file with name and write content in it

console.log(os.platform()); // Print the platform of the OS
console.log(os.hostname()); // Print the hostname of the OS
console.log(os.cpus()); // Print the CPU information of the OS


Third-party Modules
You can install them from third party.



Custom Modules
You create them by yourself.



What Are Core Modules?
Core modules are modules that are already included in Node.js.
No need to install them separately. Just use require() to import them.


What Are Global Objects?
Global object is an object that is available in all modules by default.
You do not need to import or require it to use it.


You can import console forcefully:

const { log } = require("console"); // import console module

log("custom log");


Difference Between console.log in JS and Node.js
The difference is:

In JavaScript → console.log prints on the browser console.
In Node.js → console.log prints on the terminal.
