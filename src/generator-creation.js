function* generator() {
    let result = 1 + (yield);
    console.log(`Result: ${result}`);
}

let iterator = generator();

console.log(iterator.next());
console.log(iterator.next(1));