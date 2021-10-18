let array = [5,3,7,1,4,2,100,76,9,90, 1]

const swap = (index1, index2, array) => {
    let temp = array[index1]
    array[index1] = array[index2]
    array[index2] = temp
}

const bubbleSort = array => {
    let loopLength = array.length

    for(let i = 0; i < loopLength; i++) {
        if(array[i] >= array[i+1]) {
            swap(i, i+1, array)
        }

        if(i === loopLength-1) {
            i = -1
            loopLength--
        }
    }
    return array
}

console.log(bubbleSort(array))