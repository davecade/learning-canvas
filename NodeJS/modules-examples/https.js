

const { send, read } = require('./internals')

function makeRequest(url, data) {
    send(url, data);
    return read(data);
}

const responseData = makeRequest('https://google.com', 'hello')
console.log("responseData", responseData)