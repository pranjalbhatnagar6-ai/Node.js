const http =require("http");
const fs = require("fs");

http.createServer((req, resp) => {
    fs.readFile('HTML/index.html','utf-8',(err, data)=>{
        if(err){
            res
        }
    })
})