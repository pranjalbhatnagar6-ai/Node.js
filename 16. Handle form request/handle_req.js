const http = require('http');
const fs = require('fs');
const queryString = require('querystring')
http.createServer((req, resp) => {

    fs.readFile('form.html', 'utf-8', (error, data) => {        
        
        if (error) {
            resp.writeHead(500, { "content-type": "text/plain" })
            resp.end('Server error')

            return;
        }
        resp.writeHead(200, { "content-type": "text/html" })
        if (req.url == '/') {
            resp.write(data);
        } else if(req.url == '/submit')
        {
            let dataBody = [];
            req.on('data',(chunk) =>{
                dataBody.push(chunk);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                console.log(rawData);
                let readableData = queryString.parse(rawData);
                console.log(readableData);
            })
            resp.write(`<h1>Form submitted</h1>`)
        }
        resp.end()
    })

}).listen(3200);