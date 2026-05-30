const fs = require('fs/promises');
const pipeline = require('stream/promises').pipeline;
const { createReadStream, createWriteStream } = require('fs'); //createReadStream

async function copyFile(src, dest) {
    try {
        const data = await fs.readFile(src);
        await fs.writeFile(dest, data);
        console.log(`Copied ${src} to ${dest}`);
    } catch (err) {
        console.error(err);
    }
}
//copyFile('hello.js', 'hello_copy.txt');



async function copyFileWithStream(source, destination) {
  try {
    await pipeline(
      createReadStream(source),
      createWriteStream(destination)
    );
    console.log('File copied successfully!');
  } catch (error) {
    console.error('File copy failed:', error);
  }
}
copyFileWithStream('hello.js', 'hello_copy_stream.txt');