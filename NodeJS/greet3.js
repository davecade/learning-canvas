function greet3() {
    this.greeting = "Hello World!!!"
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = new greet3()