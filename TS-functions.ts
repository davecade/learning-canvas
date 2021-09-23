const add = (a: number, b: number): number => {
    return a + b
};

function divide(a: number, b: number): number {
    return a/b
}

const multiply = (a: number, b: number): number => {
    return a*b
}

const logger = (message: string): void => {
    console.log(message)
}

const throwError = (message: string): never => {
    throw new Error(message);
}

const throwError2 = (message: string): string => {

    if(!message) {
        throw new Error(message);
    }

    return message
}

const throwError3 = (message: string): void => {

    if(!message) {
        throw new Error(message);
    }

    console.log(message)
}