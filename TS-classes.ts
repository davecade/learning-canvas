class Vehicle {
    drive(): void {
        console.log('chugga chugga')
    }

    honk(): void {
        console.log('honk')
    }
}

class Car extends Vehicle {
    drive(): void {
        console.log('vroom')
    }
}

const car = new Car();
car.drive();
car.honk();