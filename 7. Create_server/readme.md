## Why Do We Need a Server?
JavaScript by default runs in the browser.

But when we want to run JavaScript on the server, we need Node.js.

Now, if you write some code in Node.js — how can you access that code in the browser?



It’s important to understand this:

If you want to see your Node.js output in the browser, you need to set up a server.



Write Code to Create a Server
Node.js provides a built-in package called http to create servers.

You don’t need to install it separately.



Here’s the basic code to create a server:

const http = require("http");

http.createServer().listen(4800);


How to Run the Code
Open your terminal and run the file using:

node basics.js


How to Check the Output in the Browser
Open your browser and type:

http://localhost:4800


You can also check the response in:

Inspect → Network tab


Understanding Request and Response Parameters
If you want your server to return some data to the browser, this is how it works:

The client (browser) sends a request.
The server responds to that request.
In Node.js, you can handle this using the http.createServer() method, which accepts a callback function with request and response parameters.

http
.createServer((req, resp) => {
resp.write("<h1>Hello, this is Anil Sidhu</h1>");
resp.end("Hello"); // Ends the response
})
.listen(4800);
Now, when you visit http://localhost:4800, you will see the message in the browser.

