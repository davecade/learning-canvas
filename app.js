class Node {
    constructor (value) {
        this.left = null;
        this.right = null;
        this.value = value;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null
    }

    insert(value) {
        if(this.root===null) {
            this.root = new Node(value)
        } else {
            binaryTreeInsertHelper(this.root, value)
        }
    }

    lookup(value) {

    }

    //remove
}

function binaryTreeInsertHelper(node, value) {
    let pointer = node
    let direction = ''

    if(value < node.value) {
        direction = "left"
    } else if (value >= node.value) {
        direction = "right"
    }

    if(direction==='left') {
        if(node.left) {
            pointer = node.left
            binaryTreeInsertHelper(pointer, value)
        } else {
            node.left = new Node(value)
        }
    } else if (direction === "right") {
        if(node.right) {
            pointer = node.right
            binaryTreeInsertHelper(pointer, value)
        } else {
            node.right = new Node(value)
        }
    }
}


const myTree = new BinarySearchTree();
myTree.insert(9)
myTree.insert(4)
myTree.insert(6)
myTree.insert(20)
myTree.insert(170)
myTree.insert(15)
myTree.insert(1)

console.log(traverse(myTree.root))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left ? traverse(node.left) : null
    tree.right = node.right ? traverse(node.right) : null
    return tree;
}