const net = require('net');
const server = net.createServer();

server.on('connection', (socket) => {
    console.log('Client connected');
    socket.on('data', (data) => {
        console.log(`Received data: ${data}`);
        socket.write(`Echo:${new Date()} ${data} `);
    });
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});