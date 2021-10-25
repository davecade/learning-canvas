// This is an input class. Do not edit.
class BinaryTree {
    constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.parent = null;
    }
  }
  
  function findSuccessor(tree, node, successor=[]) {
      
    if(!tree.left && !tree.right) {
          if(tree.value===node.value || successor.length === 1) {
                  if(tree.value) {
                      successor.push(tree.value)
                  }
          }
      } else {
          
          if(tree.left) {
              findSuccessor(tree.left, node, successor)
          }
          
          if(tree.value===node.value || successor.length === 1){
                  if(tree.value) {
                      successor.push(tree.value)
                  }
          }
          
          if(tree.right) {
              findSuccessor(tree.right, node, successor)
          }
          
      }
      
    console.log(successor)
    return Number(successor[0]);
  }
  
const myTree = {
    "tree": {
      "nodes": [
        {"id": "1", "left": "2", "parent": null, "right": "3", "value": 1},
        {"id": "2", "left": "4", "parent": "1", "right": "5", "value": 2},
        {"id": "3", "left": null, "parent": "1", "right": null, "value": 3},
        {"id": "4", "left": null, "parent": "2", "right": null, "value": 4},
        {"id": "5", "left": "6", "parent": "2", "right": "7", "value": 5},
        {"id": "6", "left": null, "parent": "5", "right": null, "value": 6},
        {"id": "7", "left": "8", "parent": "5", "right": null, "value": 7},
        {"id": "8", "left": null, "parent": "7", "right": null, "value": 8}
      ],
      "root": "1"
    },
    "node": "5"
  }

console.log(findSuccessor(myTree, 5))