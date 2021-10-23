function greet3() {
    this.greeting = "Hello dav!!"
    this.greet = function() {
        console.log(this.greeting)
    }
}

module.exports = greet3