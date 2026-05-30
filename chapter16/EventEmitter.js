const EventEmitter = require('events');
let emitter = new EventEmitter();

emitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

emitter.emit('greet', 'Alice');

emitter.on('done', (data) => {
    console.log(`Done with data: ${data}`);
});
setTimeout(() => {
    console.log('Async process');
    emitter.emit('done', 'Some data');
},3000);
console.log('End of script');