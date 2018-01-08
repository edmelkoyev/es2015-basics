function greet(name) {
    console.log(`Hello ${name}`);
    console.log(typeof `Hello ${name}`);
    console.log(`Hello ${name}`.toUpperCase());
}

greet('Bill');

// =================

function createEmail(to, from, subject, msg){
    console.log(`
        To: ${to}
        From: ${from}
        Subject: ${subject}
        Message: ${msg}
    `);
}

createEmail('john@ya.ru', 'max@ya.ru', 'Hello', 'How are you doing?');


//=======================

let name = 'Bill';
console.log(upperName`Hello ${name}`);

function upperName(literals, value){
    return literals[0] + ' _' + value.toUpperCase() + '_';
}