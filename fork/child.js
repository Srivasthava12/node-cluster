process.on('message', (msg) => {
    console.log("Messages ", msg)
})


let count = 0;

setInterval(() => {
    process.send({ counter: count++ })
}, 1000)