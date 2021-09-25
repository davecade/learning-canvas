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
        return binaryTreeSearchHelper(value, this.root)
    }

    //remove
}

function binaryTreeInsertHelper(node, value) {

    if(value < node.value) {
        if(node.left) {
            binaryTreeInsertHelper(node.left, value)
        } else {
            node.left = new Node(value)
        }
    } else if (value >= node.value) {
        if(node.right) {
            binaryTreeInsertHelper(node.right, value)
        } else {
            node.right = new Node(value)
        }
    }
}

function binaryTreeSearchHelper(value, node) {
    if(!node) return false

    if(node.value === value) {
        return true
    } else if(value < node.value) {
        return binaryTreeSearchHelper(value, node.left)
    } else {
        return binaryTreeSearchHelper(value, node.right)
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
// myTree.insert(13)
// myTree.insert(50)
// myTree.insert(80)
// myTree.insert(190)
// myTree.insert(124)

console.log(JSON.stringify(traverse(myTree.root)))
console.log(myTree.lookup(21))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left ? traverse(node.left) : null
    tree.right = node.right ? traverse(node.right) : null
    return tree;
}