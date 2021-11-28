class BST {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }

    insert(value) {
        let currentNode = this
        while (true) {
            if (value < currentNode.value) {
                if (currentNode.left === null) {
                    currentNode.left = new BST(value)
                    break
                }
                else {
                    currentNode = currentNode.left
                }
            }
            else {
                if (currentNode.right === null) {
                    currentNode.right = new BST(value)
                    break
                }
                else {
                    currentNode = currentNode.right
                }
            }
        }
        return this
    }

    contains(value) {
        let currentNode = this
        while (currentNode !== null) {
            if (value < currentNode.value) {
                currentNode = currentNode.left
            }
            else if (value > currentNode.value) {
                currentNode = currentNode.right
            }
            else return true
        }
        return false
    }

    remove(value, parentNode = null) {
        let currentNode = this
        while (currentNode !== null) {
            if (value < currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.left
            }
            else if (value > currentNode.value) {
                parentNode = currentNode
                currentNode = currentNode.right
            }
            else {
                if (currentNode.left !== null && currentNode.right !== null) {
                    currentNode.value = currentNode.right.getMinValue()
                    currentNode.right.remove(currentNode.value, currentNode)
                }
                else if (parentNode === null) {
                    if (currentNode.left !== null) {
                        currentNode.value = currentNode.left.value
                        currentNode.right = currentNode.left.right
                        currentNode.left = currentNode.left.left
                    }
                    else if (currentNode.right !== null) {
                        currentNode.value = currentNode.right.value
                        currentNode.left = currentNode.right.left
                        currentNode.right = currentNode.right.right
                    }
                    else {
                        currentNode.value = null
                        return "Deleted Binary tree"
                    }
                }
                else if (parentNode.left === currentNode) {
                    parentNode.left = currentNode.left !== null ? currentNode.left : currentNode.right
                }
                else if (parentNode.right === currentNode) {
                    parentNode.right = currentNode.left !== null ? currentNode.left : currentNode.right
                }
                break
            }
        }
    }
    getMinValue() {
        let currentNode = this
        while (currentNode !== null) {
            currentNode = currentNode.left
        }
        return currentNode.value
    }
}


let bstt = new BST(7)
bstt.insert(6)
bstt.insert(9)
console.log(bstt.contains(9.5))
bstt.remove(6)
// bstt.remove(7)
// bstt.remove(9)
// bstt.remove(9)
console.log(bstt)