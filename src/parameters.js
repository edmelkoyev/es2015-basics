// Default argument values for the function
// ========================================

//function greet(greting, name) {
//    console.log(`${greting} - ${name}!`);
//}

function greet(greting = 'Hello', name = 'friend') {
    console.log(`${greting} - ${name}!`);
}

greet('Hi', 'Bill');
greet('Hi');
greet(undefined, 'Bill');
greet();



// REST parameters for the function
// ==========================================

/* ES5 Syntax, arguments is not an Array 
function sum(){
    console.log(arguments instanceof Array);

    var sum = 0;

    // 
    Array.prototype.forEach.call(arguments, function(value) {
        sum += value;
    });

    console.log(sum);
}
*/

function sum(...values){
    console.log(values instanceof Array);

    let sum = 0;
    values.forEach(val => {sum += val} );
    console.log(sum);
}

function sum2(...values){
    console.log(values.reduce(function(prevVal, curVal) {
        return prevVal + curVal;
    }));
}

sum(5, 7, 2, 10);
sum2(5, 7, 2, 10);