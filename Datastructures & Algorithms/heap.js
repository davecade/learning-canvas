class Heap {
  constructor() {
    this.heap = [];
  }

  getHeap() {
    return [...this.heap];
  }

  leftChild(index) {
    const leftChild = 2 * index + 1;
    return this.heap[leftChild];
  }

  rightChild(index) {
    const rightChild = 2 * index + 2;
    return this.heap[rightChild];
  }

  parent(index) {
    const parentIndex = Math.floor((index - 1) / 2);
    return parentIndex;
  }

  swap(index1, index2) {
    [this.heap[index1], this.heap[index2]] = [
      this.heap[index2],
      this.heap[index1],
    ];
  }

  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;

    while (
      currentIndex > 0 &&
      this.heap[currentIndex] > this.heap[this.parent(currentIndex)]
    ) {
      this.swap(currentIndex, this.parent(currentIndex));
      currentIndex = this.parent(currentIndex);
    }
  }
}

const myHeap = new Heap();
myHeap.insert(10);
myHeap.insert(20);
myHeap.insert(5);
console.log(myHeap.getHeap());
myHeap.insert(30);
console.log(myHeap.getHeap());
myHeap.insert(100);
console.log(myHeap.getHeap());
myHeap.insert(50);
console.log(myHeap.getHeap());
