class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
    setNext(next) {
        this.next = next
    }
    getNext() {
        return this.next
    }
}

class Queue {
    constructor(){
        this.first = null
        this.last = null
        this.length = 0
    }
    enqueue(value){
        const newNode = new Node(value)
        if (this.first === null) {
            this.first = newNode
            this.last = this.first
        } else {
            this.last.setNext(newNode)
            this.last = newNode
        }
        this.length++
        return this
    }
    dequeue() {
        if (this.length === 0) {
            console.log('No hay elementos en la cola');
        } else {
            this.first = this.first.getNext()
            this.length--
        }
        return this
    }
    peek() {
        return this.first
    }
}

const queue = new Queue()