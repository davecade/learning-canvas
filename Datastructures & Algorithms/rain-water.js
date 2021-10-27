const array = [1,8,6,2,9,4]


const min = (a, b) => a < b ? a : b
const width = (a, b) => b - a

const maxArea = array => {
  let pointer = 0
  let result = 0

  for(let i = 1; i < array.length; i++) {
    //--find height
    let area = (min(array[pointer], array[i])*width(pointer, i))

    if(area > result) {
      result = area
    }

    if(i===array.length-1) {
      pointer++
      i=pointer+1
    }

  }

  return result
}

console.log(maxArea(array))