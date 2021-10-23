const greeting = require('./greetings.json')

const greet = () => {
    console.log(greeting.en)
}

module.exports = greet