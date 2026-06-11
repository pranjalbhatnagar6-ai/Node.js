const http = require('http');
const fs = require('fs');

http.createServer((req, resp) => {

    //  Sync: Header file loaded before anything else
    let collectHeaderData = fs.readFileSync("./header.html", 'utf-8');

    let file = "/home";
    if (req.url !== '/') {
        file = req.url;
    }

    // Async: Load HTML file with callback
    if (req.url !== '/style.css') {
        fs.readFile("./" + file + ".html", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("internal server error");
                return false;
            }

            resp.write(collectHeaderData + "" + data);
            resp.end();
        });
    }
    // Serve CSS with correct content-type
    else if (req.url === '/style.css') {
        fs.readFile("./style.css", 'utf-8', (error, data) => {
            if (error) {
                resp.writeHead(500, { "content-type": "text/plain" });
                resp.end("css not found");
                return false;
            }

            resp.writeHead(200, { "content-type": "text/css" });
            resp.end(data);
        });
    }

}).listen(3200);