// multi input params - single line return;
let add = (x, y) => x +y;

// single input param - single line return;
let square = x => x * x;

// no input param - single line return;
let giveMeAns = () => 242;

// multi input params - multiLine return;
let multiply = (x, y) => {
    let res = x*y;
    return res;
}

// no input param - returnn object literal;
let getPerson = () =>  ({name: 'john'});

// IIFE 
(() => console.log('IIFE'))();

/////////////////////////

let numArr01 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let sum = 0;

numArr01.forEach(num => sum += num);
console.log(sum);

let numArr02 = numArr01.map(n => n*n);
console.log(numArr02);

//////////////////////////////

let person = {
    name: 'Bob',
    greet: function(){
        window.setTimeout(() => {
            console.log('hello, my name is ' + this.name);
            console.log('"this" is ', this);
        }, 2000);
    }
};

person.greet();


