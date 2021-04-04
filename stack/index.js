class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
    setNext(next) {
        this.next = next
    }
    getNext() {
        return this.next
    }
}

class Stack {
    constructor(){
        this.top = null;
        this.length = 0;
    }
    peek(){
        return this.top
    }
    push(value){
        const newNode = new Node(value)
        if (this.length === 0) {
            this.top = newNode
        } else {
            const holdingPointer = this.top
            this.top = newNode
            this.top.setNext(holdingPointer)
        }
        this.length++
        return this;
    }
    pop() {
        if (this.length === 0) {
            console.log('No hay nodos para remover');
        } else {
            this.top = this.top.getNext()
            this.length--
            return this;
        }
    }
}

const stack = new Stack()