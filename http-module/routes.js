const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('Hello Guys, Welcome to node js');
    } else if (url === '/projects') {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('This is the project url');
    } else {
        res.writeHead(200, { 'content-type': 'text/plain' });
        res.end('This page can not be found');
    }

});

const port = 3000;
server.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});