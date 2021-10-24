let array = [5,3,7,1,4,2,100,76,9,90, 1]

function selectionSort(array) {
	let smallestNumIdx;
    let startingIdx = 0;
	
	while(startingIdx<array.length) {
		smallestNumIdx = startingIdx;
		for(let i = startingIdx+1; i<array.length; i++) {
			if(array[i] < array[smallestNumIdx]) {
				smallestNumIdx = i
			}
		}
		let temp = array[startingIdx]
		array[startingIdx] = array[smallestNumIdx]
		array[smallestNumIdx] = temp
		startingIdx++
	}
	
	return array;
}


console.log(selectionSort(array))