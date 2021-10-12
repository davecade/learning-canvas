let apples: number = 5;

let nothing: null = null;
let blank: undefined = undefined

let now: Date = new Date()

//--array
let colors: string[] = ['red', 'green', 'blue']

let myNumbers: number[] = [ 1, 2, 3, 4]

let truths: boolean[] = [ true, true, false ]


//-- classes
class Car {

}
let car: Car = new Car();

//-- Object literal
let point: { x: number; y: number } = {
    x: 10,
    y: 20
}

//-- functions
const logNumber: (i: number) => void = i => {
    console.log(i)
}

//-- When to use annotations
//-- 1> Function that returns the 'any' type
const json = '{"x": 10, "y": 20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates)

//-- 2) When we declare a variable on the line
//-- and initialize it later
let words = ['red', 'green', 'blue']
let foundWord: boolean;

for(let i = 0; i <words.length; i++) {
    if(words[i]==='green') {
        foundWord = true;
    }
}

//-- 3) Variable whos type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false

for(let i = 0; i< numbers.length; i++) {
    if(numbers[i] > 0) {
        numberAboveZero = numbers[i]
    }
}