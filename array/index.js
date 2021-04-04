//Ejemplo de array tradicional
//const array = ['Carlos', 'David', 'Ramírez', 'Gómez']

class MyArray {
    constructor() {
        this.length = 0;
        this.data = {}
    }
    get(index) {
        return this.data[index];
    }
    push(item) {
        this.data[this.length] = item;
        this.length++;
        return this.data;
    }
    pop() {
        this.length--;
        const lastItem = this.data[this.length]
        delete this.data[this.length]
        return lastItem;
    }
    delete(index) {
        const item = this.data[index]
        this.shiftIndex(index)
        return item;
    }
    shiftIndex(index) {
        //this.length--
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        delete this.data[this.length - 1]
        this.length--;
    }
    add(position, item){
        if(position > this.length) {
            this.push(item)
        } else if(position < 0){
            this.insertInPosition(0, item)
        } else {
            this.insertInPosition(position, item)
        }
        return this.data;
    }
    insertInPosition(position, item){
        for (let i = this.length; i > position; i--) {
            this.data[i] = this.data[i - 1];
        }
        this.data[position] = item
        this.length++
    }
    removeFirst(){
        this.delte(0)
    }
}

const myArray = new MyArray();
myArray.push('Hola')
myArray.push('Mundo')
myArray.push('Soy')
myArray.push('Una')
myArray.push('estrcutura')
myArray.push('de')
myArray.push('datos')

console.log(myArray.data);
console.log(myArray.length);

myArray.pop()
myArray.pop()

console.log(myArray.data);
console.log(myArray.length);

myArray.delete(1)

console.log(myArray.data);
console.log(myArray.length);

myArray.add(1, 'world');

console.log(myArray.data);
console.log(myArray.length);