class Node {
    constructor(value) {
        this.value = value
        this.left = null
        this.right = null
    }
    setLeft(left) {
        this.left = left
    }
    setRight(right) {
        this.right = right
    }
    getValue(){ return this.value }
    getLeft(){ return this.left }
    getRight(){ return this.right }
}

class BinaryTree {
    constructor () {
        this.root = null
    }
    insert(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode
            return this
        } else {
            let currentNode = this.root
            while(true) {
                if (value < currentNode.getValue()) {
                    if (!currentNode.left) {
                        currentNode.left = newNode
                        return this
                    } else {
                        currentNode = currentNode.getLeft()
                    }
                } else {
                    if (!currentNode.right) {
                        currentNode.right = newNode
                        return this
                    } else {
                        currentNode = currentNode.getRight()
                    }
                }
            }
        }
    }
    search(value) {
        let currentNode = this.root
        if(currentNode === null) {
            console.log('No existe arbol');
            return null
        }
        while(true) {
            if(value === currentNode.getValue()) {
                return currentNode
            } else if (value < currentNode.getValue()) {
                if(currentNode.left === null) {
                    console.log('Elemento no encontrado o no existente');
                    return null
                } else {
                    currentNode = currentNode.getLeft()
                }
            } else {
                if(currentNode.right === null) {
                    console.log('Elemento no encontrado o no existente');
                    return null
                } else {
                    currentNode = currentNode.getRight()
                }
            }
        }
    }
}

const tree = new BinaryTree()