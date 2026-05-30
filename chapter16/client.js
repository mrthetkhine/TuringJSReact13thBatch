const net = require('net');

// Define connection parameters
const OPTIONS = {
    port: 3000,
    host: 'localhost'
};

// Establish connection to the TCP server
const client = net.createConnection(OPTIONS, () => {
    console.log(`Connected to TCP server at ${OPTIONS.host}:${OPTIONS.port}`);
    
    // Send initial data to the server
    client.write('Hello from Node.js TCP Client!');
});

// Handle incoming data chunks from the server
client.on('data', (data) => {
    console.log('Received from server:', data.toString());
    
    client.end();
});

// Handle connection termination by the server
client.on('end', () => {
    console.log('Disconnected: Server closed the connection');
});

