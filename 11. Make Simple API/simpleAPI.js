const { REFUSED } = require('dns');
const http = require('http');

const userData = [
    {
        name: "PB",
        age: 21,
        email:"pb12@gmai.com"
    },
    {
        name: "TV",
        age: 23,
        email:"tv12@gmai.com"
    },
    {
        name: "PU",
        age: 22,
        email:"pu12@gmai.com"
    }
]

http.createServer((req, resp) => {
    resp.setHeader("Content-Type","application/json")
    resp.write(JSON.stringify(userData));
    resp.end();
}).listen(6080);