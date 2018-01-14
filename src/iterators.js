/*
let cars = ['BMW', 'Audi', 'Toyota'];

for (let car of cars){
    console.log(car);
}


console.log('--------------------');

let iterator = cars[Symbol.iterator]();

let cur = iterator.next();

while (!cur.done){
    console.log(cur.value);
    cur = iterator.next();
}
*/

/*idGenerator
let idGenerator = {
    [Symbol.iterator]() {
        let id = 1;

        return {
            next() {
                let value = id > 100 ? undefined : id++;
                let done = !value;

                return {value, done};
            }
        };
    }
};

for (let id of idGenerator) {
    console.log(id);
}
 */

// Random generator
let randemGenerator = {
    generate() {
        return this[Symbol.iterator]();
    },

    [Symbol.iterator]() {
        let count = 0;

        return {
            next() {
                let value = Math.ceil(Math.random() * 100);
                let done = count > 10;
                count += 1;

                return { value, done };
            }
        };
    }
};

/*
for (let random of randemGenerator) {
    console.log(random);
} 
*/

var random = randemGenerator.generate();
console.log( random.next().value );


///////////////////

class ArrayIterator {
    constructor(array) {
        this.array = array.map(item => item).sort();
        this.index = 0;
    }

    next() {
        let result = {value: undefined, done: true};

        if (this.index < this.array.length){
            result.value = this.array[this.index];
            result.done = false;
            this.index += 1;
        }

        return result;
    }
}


class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTasks(...tasks){
        this.tasks = this.tasks.concat(tasks);
    }

    [Symbol.iterator]() {
        return new ArrayIterator(this.tasks);
    }
}

let tList = new TaskList();
tList.addTasks('RTask 01', 'ATask 02', 'BTask 03');

for (let t of tList) {
    console.log(t);
}

