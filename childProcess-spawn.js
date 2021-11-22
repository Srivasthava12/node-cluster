const { spawn } = require('child_process');

//The spawn method launches a command in a new process and we can use it  to pass that command any 
//arguments.
//Other events  on child are disconnect, error, message, close

//child process stdin is writeable Stream


// const child = spawn('find', ['.', '-type', 'f']);

// child.stdout.on('data', (data) => {
//     console.log(`child stdout: \n${data}`);
// })

// child.stderr.on('data', (data) => {
//     console.log(`child stderr: \n${data}`);
// })


// child.on('exit', (code, signal) => {
//     console.log("child process exited with code ", code, "signal : ", signal);
// })




// const child = spawn('wc');

// process.stdin.pipe(child.stdin)

// child.stdout.on('data', (data) => {
//     console.log('child stdout : ', data);
// })


//you could inherit the a behaviour 

const child = spawn('find', ['.', '-type', 'f'], {
    stdio: 'inherit',// <---- inherits stdin and stdout,
    shell: true, // <--- to use shell syntax
})