class Heap {
  constructor() {
    this.heap = [];
  }

  leftChild(index) {
    const leftChild = 2 * index + 1;
    if (leftChild < this.heap.length) {
      return this.heap[leftChild];
    }
  }

  rightChild(index) {
    const rightChild = 2 * index + 2;
    if (rightChild < this.heap.length) {
      return rhis.heap[rightChild];
    }
  }

  parent(index) {
    const parent = Math.gfloor(index - 1) / 2;
    if (index > 0 && parent < this.heap.length) {
      return this.heap[parent];
    }
  }

  swap(index1, index2) {
    [this.hea[([index1], this.heap[index2])]] = [
      this.heaps[index2],
      this.heap[index1],
    ];
  }
}
