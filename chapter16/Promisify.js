//const util = require('util');
const fs = require('fs');
const { resolve } = require('dns');

function promisify(fn) {
    return function(...args) {
        return new Promise((resolve, reject) => {
            fn(...args, (err, data) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(data);
                }
            });
        });
    }
}
const readFile = promisify(fs.readFile);

console.log("Starting to read file...");
readFile('hello.js')
    .then(data => {
        console.log("Asynchronous read: " + data.toString());
    })
    .catch(err => {
        console.error(err);
    });

console.log("Finished reading file.");