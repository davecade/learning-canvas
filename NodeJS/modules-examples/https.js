

const internals = require('./internals')
// const { send } = require('./internals/request.js')
// const { read } = require('./internals/response.js')

function makeRequest(url, data) {
    internals.request.send(url, data);
    return internals.response.read(data);
}

const responseData = makeRequest('https://google.com', 'hello')
console.log("responseData", responseData)