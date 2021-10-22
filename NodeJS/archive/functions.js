function greet() {
    console.log('hi')
}


//-- First class functions
function logGreeting(fn) {
    fn()
}
logGreeting(greet)

//-- function expressions
const greetMe = () => {
    console.log("hi dave")
}

greetMe();