const fs = require('fs');

console.log("Starting to read file...");
fs.readFile('hello.js', (err, data) => {
    if (err) {
        return console.error(err);
    }
    console.log("Asynchronous read: " + data.toString());
});
console.log("Finished reading file.");