const fibRecursion = index => {
    if(index===0) {
        return 0
    } else if(index===1) {
        return 1
    } else {
        return fibRecursion(index-1) + fibRecursion(index-2)
    }
}

const fibIterative = index => {
    let array = []
    let result

    if(index>=0) {
        if(index===0) {
            return 0
        } else if(index===1) {
            return 1
        } else {
            for(let i = 0; i <= index; i++) {
                if(i<2) {
                    array.push(i)
                } else {
                    result = array[0] + array[1]
                    array[0] = array[1]
                    array[1] = result
                }
                console.log("array", array)
            }
            return result
        }
    }
}

console.log(fibIterative(3))
console.log(fibRecursion(3))