const http = require('http');
const fs = require('fs');
const queryString = require('querystring')
http.createServer((req, resp) => {

    fs.readFile("../16. Handle form request/form.html", 'utf-8', (error, data) => {

        if (error) {
            resp.writeHead(500, { "content-type": "text/plain" })
            resp.end('Server error')

            return;
        }
        resp.writeHead(200, { "content-type": "text/html" })
        if (req.url == '/') {
            resp.write(data);
        } else if (req.url == '/submit') {
            let dataBody = [];
            req.on('data', (chunk) => {
                dataBody.push(chunk);
            });

            req.on('end', () => {
                let rawData = Buffer.concat(dataBody).toString();
                // Reading Raw data
                console.log("rawData");
                console.log(rawData);
                console.log("------")
                // Reading Readable Data
                let readableData = queryString.parse(rawData);
                console.log("readableData");
                console.log(readableData);
                let dataString = "My name is " + readableData.name + " and my email id is " + readableData.email
                console.log("Data in String Format");
                console.log(dataString);
                // File Creation to Store Data...
                // File creation sync
                // fs.writeFileSync("./Store_txt_files/"+readableData.name+".txt",dataString)
                
                // File creation Async
                fs.writeFile("./Store_txt_files/"+readableData.name+".txt",dataString, 'utf-8',(err)=>{
                    if(err){
                        resp.end("internal server error")
                        return false;
                    }else{
                        console.log("File Created")
                    }
                })
            })
            console.log("File created")
            resp.write(`<h1>Form submitted</h1>`)
        }
        resp.end()
    })

}).listen(3200);
