let array = [5,3,7,1,4,2,100,76,9,90, 1]

const insertionSort = array => {
    let idx = 1

    if(array.length>1) {
        for(let i = 1; i<array.length; i++) {
            idx = i
            while(idx > 0 && (array[idx] < array[idx-1])) {
                let temp = array[idx]
                array[idx] = array[idx-1]
                array[idx-1] = temp
                idx--
            }
        }
    }
    return array
}

console.log(insertionSort(array))