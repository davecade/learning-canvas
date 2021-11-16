
const request = require('./request')
const response = require('./response')

function request(url, data) {
    request.send(url, data);
    return response.read();
}