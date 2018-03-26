const http = require('http');
const path = require('path');
const fs = require('fs');
const port = 8080;

const contentTypes = {
    '.js': 'text/javascript',
    '.html': 'text/html',
    '.ico': 'image/ico',
};

const requestHandler = (request, response) => {
    const filePath = path.join(process.cwd(), request.url === '/' ? 'index.html' : request.url);
    const extension = path.extname(filePath);

    console.log(request.url, filePath);

    fs.readFile(filePath, function(error, content) {
        if (error) {
            response.writeHead(500);
            response.end('error: ' + error.code);
            response.end();
        } else {
            response.writeHead(200, { 'Content-Type': contentTypes[extension] });
            response.end(content, 'utf-8');
        }
    });
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
    if (err) {
        return console.log('something bad happened', err)
    }

    console.log(`server is listening on ${port}`)
})
