const http = require('http');
const userform = require('./userform')
const userDataSubmit = require("./userDataSubmit")

http.createServer((req, resp) => {
    resp.writeHead(200,{"content-type":'text/html'})
    if(req.url=="/"){
        userform(req, resp)
    }else if(req.url=='/submit'){
        // resp.write("SUBMIT");
        userDataSubmit(req, resp)

    }
    resp.end();   
}).listen(3200);