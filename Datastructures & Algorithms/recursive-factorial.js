const findFactorialRecursive = number => {
    if(number === 1) {
        return 1
    } else {
        return number*findFactorialRecursive(number-1)
    }
}

const findFactorialIterative = number => {
    let result = number

    while(number>1) {
        number--
        result =  result*number
    }

    return result
}

console.log(findFactorialRecursive(10))

console.log(findFactorialIterative(10))