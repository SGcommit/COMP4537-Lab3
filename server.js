const http = require('http');
const url = require('url');
const fileHandler = require('./modules/fileHandler');
const utils = require('./modules/utils');
const PORT = process.env.PORT || 3000; 

class Server {
    constructor(port) {
        this.port = port;
    }

    handleRequest(req, res) {
        const parsedUrl = url.parse(req.url, true);
        const pathname = parsedUrl.pathname;

        if (parsedUrl.pathname === '/getDate/') {
            this.handleGetDate(parsedUrl, res);
        } else if (parsedUrl.pathname === '/readFile/') {
            this.handleReadFile(res);
        } else if (parsedUrl.pathname === '/writeFile/') {
            this.handleWriteFile(parsedUrl, res);
        } else {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            res.end('404 Not Found');
        }
    }
    handleGetDate(parsedUrl, res) {
        const name = parsedUrl.query.name || "Guest";
        const message = utils.getGreetingMessage(name);

        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end(`<p style="color:blue;">${message}</p>`);
    }

    handleReadFile(res) {
        fileHandler.readFile((err, data) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end(err);
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(data);
        });
    }


    handleWriteFile(parsedUrl, res) {
        const text = parsedUrl.query.text;
        if (!text) {
            res.writeHead(400, { 'Content-Type': 'text/plain' });
            res.end('400 Bad Request: Missing "text" query parameter');
            return;
        }

        fileHandler.appendToFile(text, (err, successMessage) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('500 Internal Server Error: Unable to write file');
                return;
            }
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end(successMessage);
        });
    }


    start() {
        const server = http.createServer(this.handleRequest.bind(this));
        server.listen(this.port, () => {
            console.log(`Server running on port ${this.port}`);
        });
    }
}
const apiServer = new Server(PORT);
apiServer.start();

