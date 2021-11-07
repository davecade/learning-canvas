const EventEmitter = require('events');
const celebrity = new EventEmitter();

// Subscribe to celebrity for Observer 1
celebrity.on('race', result => {
    console.log("congrats! You are the best!")
});

// Subscribe to celebrity for Observer 1
celebrity.on('race', result => {
    console.log("Damn, better luck next race")
});


// Subscribe to celebrity for Observer 2
celebrity.on('race', result => {
    console.log("Boo! I could have done better than that!")
});

// Subscribe to celebrity for Observer 2
celebrity.on('race', result => {
    console.log("Yes! See i knew you sucked!")
});

// Exit
process.on('exit', code => {
    console.log(`Process exist event with code:`, code)
});

celebrity.emit('race', 'win')
celebrity.emit('race', 'lost')