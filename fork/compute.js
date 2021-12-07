const longComputation = () => {
    let sum = 0;

    for (let index = 0; index < 2e9; index++) {
        sum += index
    }
    return sum
}

process.on('message', (msg) => {
    console.log("msg =======>" , msg)
    const sum = longComputation()
    process.send(sum)
})
