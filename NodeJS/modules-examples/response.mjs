function read() {
    return decrypt('hello')
}

function decrypt(data){
    return `decrypted data: ${data}`
}

export {
    read
}