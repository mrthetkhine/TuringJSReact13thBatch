const fs = require('fs/promises');

console.log("Starting to read file...");

async function readHello() {
    try
    {
        const data = await fs.readFile('hello.js');
        console.log("Asynchronous read: " + data.toString());
    }
    catch (err) {
        console.error(err);
    }
}
readHello();

console.log("Finished reading file.");
