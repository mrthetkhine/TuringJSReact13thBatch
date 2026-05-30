const os = require('os');
console.log('argv ',process.argv);
console.log('cwd ',process.cwd());
console.log('cpuUsage ',process.cpuUsage());
//console.log('env ',process.env);
console.log('execPath ',process.execPath );
//process.exit(0);
console.log('end');
console.log('pid ',process.pid);
console.log('platform ',process.platform);
console.log('version ',process.version);
console.log('user ',process.getuid());

console.log('os.cpus() ',os.cpus());
console.log('os.freemem() ',os.freemem());
console.log('os.homedir() ',os.homedir());
console.log('os.hostname() ',os.hostname());
console.log('os.loadavg() ',os.loadavg());

console.log('os.tempdir ',os.tmpdir());