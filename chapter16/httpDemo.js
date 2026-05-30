const http = require('http');
const server = http.createServer((req, res) => {
    console.log(`Received request for ${req.url}`); 
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello, World!\n');
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});