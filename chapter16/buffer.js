let b = Buffer.from([0x41, 0x42, 0x43]);
console.log(b); // <Buffer 41 42 43>
console.log(b.toString()); // ABC

for(let i = 0; i < b.length; i++) {
    b[i]++;
}
console.log(b.toString()); 
let dead = Buffer.alloc(1024, "DEADBEEF", "hex");
console.log(dead.readUInt32BE(0).toString()); // deadbeef