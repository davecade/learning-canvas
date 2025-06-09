class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTreeRecursive {
  constructor() {
    this.root = null;
  }

  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
    } else {
      binaryTreeInsertHelper(this.root, value);
    }
  }

  contains(value, currentNode = this.root) {
    if (currentNode === null || currentNode === undefined) {
      return false;
    }

    if (value === currentNode.value) {
      return true;
    }

    if (value < currentNode.value) {
      return this.contains(value, currentNode.left);
    }

    if (value > currentNode.value) {
      return this.contains(value, currentNode.right);
    }
  }
}

function binaryTreeInsertHelper(node, value) {
  if (value < node.value) {
    if (node.left) {
      binaryTreeInsertHelper(node.left, value);
    } else {
      node.left = new Node(value);
    }
  } else if (value >= node.value) {
    if (node.right) {
      binaryTreeInsertHelper(node.right, value);
    } else {
      node.right = new Node(value);
    }
  }
}

const myTree = new BinarySearchTreeRecursive();
myTree.insert(9);
myTree.insert(5);
myTree.insert(6);
myTree.insert(20);
myTree.insert(170);
myTree.insert(15);
myTree.insert(1);
console.log(" 5 is in the tree: ", myTree.contains(5));
