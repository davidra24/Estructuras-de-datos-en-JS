class Node {
    constructor(value){
        this.value = value
        this.next = null
    }
    setNext(next) {
        this.next = next
    }
    getValue(){
        return this.value
    }
    getNext(){
        return this.next
    }
}

class SingleLinkedList{
    constructor(value){
        this.head = new Node(value)
        this.tail = this.head
        this.length = 1
    }
    append(value){
        this.tail.setNext(new Node(value))
        this.tail = this.tail.next
        this.length++
        return this
    }
    preppend(value){
        const newNode = new Node(value)
        newNode.setNext(this.head)
        this.head = newNode
        this.length++
        return this
    }
    insert(index, value){
        if(index > this.length) {
            return this.append(value)
        }
        if (index <= 0) {
            return this.preppend(value)
        }
        const newNode = new Node(value)
        let actualNode = this.head
        for (let i = 0; i < index - 1; i++) {
            actualNode = actualNode.getNext()
        }
        newNode.setNext(actualNode.getNext())
        actualNode.setNext(newNode)
        this.length++
        return this
    }
    remove(index){
        let actualNode = this.head
        let del = false
        let count = 0;
        if(index >= this.length) {
            return undefined
        }
        while (!del) {
            if(index === count + 1){
                const replaceNode = actualNode.getNext()
                if(replaceNode !== null){
                    actualNode.setNext(replaceNode.getNext())
                } else {
                    actualNode.setNext(null)
                    this.tail = actualNode
                }
                del = true
            } else {
                actualNode = actualNode.getNext()
                count++
            }
        }
        this.length--
        return this
    }
}

const myList = new SingleLinkedList(1)

myList.append(2)
myList.append(3)
myList.append(4)

console.log(myList.head.getValue());
console.log(myList.head.getNext().getValue());
console.log(myList.head.getNext().getNext().getValue());
console.log(myList.head.getNext().getNext().getNext().getValue());