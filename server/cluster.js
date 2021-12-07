const cluster = require('cluster');

const os = require('os');



if (cluster.isMaster) {
    const count = os.cpus().length;
    console.log("Forking ", count, " CPUs")
    for (let index = 0; index < count; index++) {
        cluster.fork()
    }
//this notifies if the worker process crashes 
    cluster.on('exit', (worker, code, signal) => {
        if(code !==0 && !worker.exitedAfterDisconnect){
            console.log(`Worker ${worker.id} crash \n Starting a new worker ...`);
            cluster.fork();
        }
    })

} else { 
    require('./server')
}