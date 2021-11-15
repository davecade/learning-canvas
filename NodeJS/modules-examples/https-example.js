
const request = require('./request.js')
function request(url, data) {
    send(url, data);
    return read();
}