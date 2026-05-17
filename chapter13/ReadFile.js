const fs = require('node:fs');

console.log('Start');
/*
let data = fs.readFileSync('hello.txt');
console.log('file length ',data.toString().length);
*/ 
fs.readFile('hello.txt',function(err,data){
   console.log('Length ',data.toString().length); 
});
console.log('end');