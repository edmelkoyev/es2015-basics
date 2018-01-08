let firstName = 'Bill',
    lastName = 'Gates',
    email = 'billgates@ms.com';

let person = {
    firstName,
    lastName,
    email,
    sayHello() {
        console.log(`Hi, my name is ${this.firstName}`);
    },
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    set fillname(val){
        this.firstName = val;
    }
};

console.log(person);
person.sayHello();

// object properties
// ES5
let n1 = person.firstName;
let n2 = person['firstName'];

let propName = 'lastName';
let ln1 = person[propName];
// ES6 update
person = Object.assign({}, person, {
    [propName]: 'McCartney'
});
console.log(person);

// =========================
function createCar(pName, pVal){
    return {
        [pName]: pVal,
        ['_' + pName]: pVal,
        [pName.toUpperCase()]: pVal,
        ['get' + pName]() {
            return this['_' + pName];
        }
    };
}

console.log(createCar('vin', 1));