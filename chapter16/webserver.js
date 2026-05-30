const net = require('net');
const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
        //socket.write(`Echo:${new Date()} ${data} `);

        let body = "<html><body><h1>Hello, World!</h1></body></html>";
        let response = `HTTP/1.1 200 OK\r\nContent-Type: text/html\r\n`
        + `Content-Length: ${Buffer.byteLength(body)}\r\n\r\n`
        +`${body}`;
        socket.write(response);
    });
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(8000, () => {
    console.log('Webserver listening on port 8000');
});