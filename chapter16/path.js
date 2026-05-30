const path = require('path');
const fs = require('fs');
console.log('cwd ',process.cwd());
console.log('__filename ',__filename );
console.log('__dirname ',__dirname );

const fileName = __filename;
console.log('path.basename ',path.basename(fileName));
console.log('path.dirname ',path.dirname(fileName));
console.log('path.extname ',path.extname(fileName));

console.log('normalize ',path.normalize('/foo/bar/../hello'));
console.log('join ',path.join('/foo', 'bar', 'hello'));
console.log('resolve ',path.resolve('foo', 'bar', 'hello'));

fs.mkdirSync("dist/lib", { recursive: true });