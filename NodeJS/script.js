const fs = require('fs')

fs.readFile('./hello.txt', (err, data) => {
    if(err) {
        console.log('error')
    }
    console.log("Async", data.toString())
})

const file = fs.readFileSync('./hello.txt');
console.log("Sync", file.toString())

// -- APPEND
fs.appendFile("./hello.txt", "This is so cool!", err => {
    if(err) {
        console.log(err)
    }
})


// -- write
fs.writeFile('bye.txt', 'Sad to see you go', err => {
    if(err) {
        console.log(err)
    }
})

// -- delete
fs.unlink('./bye.txt', err => {
    if(err) {
        console.log(err)
    }
    console.log("Deleted bye file")
})