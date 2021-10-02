const carMakers: string[] = []

const dates = [new Date(), new Date()]

const carsByMake1 = [
    ['f150'],
    ['corolla'],
    ['camero']
]

const carsByMake2: string[][] = [];

//-- Help wih inference when extracting values
const car = carMakers[0]
const myCar = carMakers.pop()

// -- flexible types
const importantDates: (Date | string)[] = [new Date()]