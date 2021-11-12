const http = require('http')

const PORT = 4000;

const server = http.createServer()

server.on('request', (req, res) => {
    res.writeHead(200, {
        'Content-Type': 'application/json'
    })
    res.end(JSON.stringify({
        id: 1,
        name: 'Sir Isaac newton'
    }))
})


server.listen(PORT, () => {
    console.log(`Listening on port ${PORT}...`)
});