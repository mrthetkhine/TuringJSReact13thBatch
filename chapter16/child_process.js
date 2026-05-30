const child_process = require("child_process");
// Spawn a child process to run the "ls" command
const ls = child_process.spawn("ls", ["-l", "-a"]);

// Listen for data from the child process's stdout
ls.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
});

// Listen for data from the child process's stderr
ls.stderr.on("data", (data) => {
    console.error(`stderr: ${data}`);
});