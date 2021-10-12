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

    remove(value) {
        // Write your code here.
        // Do not edit the return statement of this method.
            let finished = false;
            let targetfound = false;
            let lowestFound = false;
            let pointer = this.root
            let target = this.root
            let lowest = this.root
            let parent
            let direction
                
                //Check if node exists, otherwise dont even bother looking
          if(this.lookup(value)===true) {
              //If exists, find the node
              while(!finished) {
                  if(value === pointer.value) {
                      finished = true;
                      targetfound = true;
                      target = pointer;
                  } else {
                        if (pointer.left) {							
                            if(value === pointer.left.value) {
                                finished = true;
                                targetfound = true;
                                parent = pointer
                                pointer = pointer.left
                                target = pointer;
                                direction = "left"
                            }
                        }
                        
                        if (pointer.right) {							
                            if(value === pointer.right.value) {
                                finished = true;
                                targetfound = true;
                                parent = pointer
                                pointer = pointer.right
                                target = pointer;
                                direction = "right"
                            }
                        }
                    }

                    //Not found yet, so check where to move pointer to continue searching
                    if(!targetfound) {
                        if(value < pointer.value) {
                                pointer = pointer.left
                        } else if (value >= pointer.value) {
                                pointer = pointer.right
                        }
                    }
              }
          }
          
          //If delete target is found, find the lowest number on the right side
                let lowestNodeHasChildren = false // by Default set to false until we find lowest node
                
                //If right side exists, then must find lowest on right side.
                //But if right side doesnt exists, then dont need to find lowest node anymore
                //Lowest node will be the direct left node
                let mustFindLowestVal
          if(targetfound) {
                if(target.right) {
                    direction = "right"
                    parent = pointer
                    pointer = target.right;
                    lowest = pointer
                    
                    // Must find lowest value because right side exists
                    mustFindLowestVal = true;
                } else if(target.left) {
                    direction ="left"
                    parent = pointer
                    pointer = target.left;
                    lowest = pointer
                    
                    // No need to find lowest on left side.
                    // Lowest is lower than target value, so lowest will be left node
                    mustFindLowestVal = false;
                } else {
                    target = null
                    pointer = null
                    lowest = null
                    lowestFound = true
                    
                    //-- Dont need to rearange children because the lowest node has no children
                    lowestNodeHasChildren = true
                    
                    if(direction==="left" && parent.left) {
                        parent.left = null
                    } else if(direction === "right" && parent.right) {
                        parent.right = null
                    }
                }
              
              while(!lowestFound) {
                  if(pointer.left === null && pointer.right === null) {
                      lowestFound = true
                                    
                                        //if mustFindLowestVal === true, then set lowest to pointer
                                        //if mustFindLowestVal === false, then no need to set lowest to pointer. We already have lowest value
                                        if((pointer.value < lowest.value) && mustFindLowestVal) {
                                            lowest = pointer
                                        }
                                
                  } else {
                      if(pointer.left) {
                            parent = pointer
                            direction = "left"
                          pointer = pointer.left
                      } else if(pointer.right) {
                            parent = pointer
                            direction = "right"
                          pointer = pointer.right
                      }
                  }
              }
          }
            
            //Once lowest is found, delete target, and add lowest in its place
            let newTargetVal
            if(lowestNodeHasChildren === false) {
                    newTargetVal = lowest.value
                    if(lowest.left || lowest.right) {
                        lowest.remove(newTargetVal)
                    }
                    target.value = newTargetVal
                
                    if(direction==="left" && parent.left) {
                        parent.left = null
                    } else if(direction === "right" && parent.right) {
                        parent.right = null
                    }
                
                    pointer = null
                    lowest = null
            }
      }

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
myTree.remove(170)
console.log("----")
console.log(JSON.stringify(traverse(myTree.root)))

function traverse(node) {
    const tree = { value: node.value };
    tree.left = node.left ? traverse(node.left) : null
    tree.right = node.right ? traverse(node.right) : null
    return tree;
}