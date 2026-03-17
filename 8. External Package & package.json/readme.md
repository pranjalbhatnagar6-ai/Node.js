What is an External Package?
An external package is a package we install from a third party (someone else wrote it).

We use it to add extra functionality to our project without writing everything ourselves.

Example:

nodemon — a package that automatically restarts the server when code changes.

Without this, we would have to stop and start the server manually after every change.



How to Install an External Package
Example: Install the colors package from https://www.npmjs.com/package/colors



Open the terminal and run:

npm install colors
or

npm i colors


Example of Using an External Package
const colors = require("colors");

console.log(colors.red("Hi, this is Anil Sidhu"));
console.log(colors.green("Hi, this is Anil Sidhu"));
console.log(colors.yellow("Hi, this is Anil Sidhu"));


To run this code, type in the terminal:

node colors.js


What is package.json?
package.json is a file that contains details about your project, such as:

Project name
Project version
External packages used (dependencies)
Project description
Author
License


What is package-lock.json?
package-lock.json is a file that contains detailed information about the exact versions of every installed package and its dependencies (internal packages).

It ensures that everyone working on the project installs the same package versions.



What is node_modules?
node_modules is a folder where all installed external packages are stored.



How to Create a package.json File
Run this command in the terminal:



npm init
You will be asked to fill in some details:

package name: node-2025
version: (1.0.0)
description: node js tutorial in hindi 2025
entry point: (index.js)
git repository:
keywords:
author: Anil Sidhu
license: (ISC)


Important Notes
External packages are stored inside the node_modules folder.
You should not push node_modules to GitHub — because it is a very large folder.
Other developers can easily install the required packages by running:


npm install
This will read package.json and package-lock.json and install everything needed.

package.json - have details about Projects,like name,external package,version.

package-lock.json - alag se dependencies.