Create Server in simpleAPI.js
We’ll use Node.js http module to create a basic server.



Define Static API Data
const userData = [
{
name: "Anil",
age: 30,
email: "anil@test.com",
},
{
name: "sam",
age: 20,
email: "sam@test.com",
},
{
name: "peter",
age: 30,
email: "peter@test.com",
},
];
This is sample static data to simulate API response.



Use This Data in Server Response
const http = require("http");

http
.createServer((req, resp) => {
resp.setHeader("Content-Type", "application/json"); // Set the content type to JSON
resp.write(JSON.stringify(userData)); // Convert the userData array to a JSON string
resp.end(); // End the response
})
.listen(6000);


How to Test the API
Run the file using:

nodemon simpleAPI.js


Open browser and go to:

http://localhost:6000


Test API using Thunder Client
You can also use Thunder Client (VS Code extension) or Postman:

Method: GET
URL: http://localhost:6000
You will get the JSON response.