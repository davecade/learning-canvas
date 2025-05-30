class Heap {
  constructor() {
    this.heap = [];
  }

  getHeap() {
    return [...this.heap];
  }

  leftChild(index) {
    return 2 * index + 1;
  }

  rightChild(index) {
    return 2 * index + 2;
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

  remove() {
    if (this.heap.length === 0) {
      return null;
    }

    if (this.heap.length === 1) {
      return this.heap.pop();
    }

    const removedValue = this.heap[0];
    this.heap[0] = this.heap.pop();
    this.sinkdown(0);
    return removedValue;
  }

  sinkdown(index) {
    let maxIndex = index;
    let size = this.heap.length;

    while (true) {
      let maxIndex = index;
      const leftChildIndex = this.leftChild(index);
      const rightChildIndex = this.rightChild(index);
      if (
        leftChildIndex < size &&
        this.heap[leftChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = leftChildIndex;
      }

      if (
        rightChildIndex < size &&
        this.heap[rightChildIndex] > this.heap[maxIndex]
      ) {
        maxIndex = rightChildIndex;
      }

      if (maxIndex !== index) {
        this.swap(index, maxIndex);
        index = maxIndex;
      } else {
        return;
      }
    }
  }
}

const myHeap = new Heap();

// myHeap.insert(95);
// myHeap.insert(75);
// myHeap.insert(80);
// myHeap.insert(55);
// myHeap.insert(60);
// myHeap.insert(50);
// myHeap.insert(65);
// console.log(myHeap.getHeap());
// myHeap.remove();
// console.log(myHeap.getHeap());
// myHeap.remove();
// console.log(myHeap.getHeap());

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
myHeap.remove();
console.log(myHeap.getHeap());
myHeap.remove();
console.log(myHeap.getHeap());
