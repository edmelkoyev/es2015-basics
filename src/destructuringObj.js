let person = {
    firstName: 'John',
    lastName: 'Doe'
};

let {firstName, lastName} = person;
console.log(firstName, lastName);

console.log('--------------------------');

let {firstName: fn, lastName: ln, age = 25} = person;
console.log(fn, ln, age);


/////////////////////////////////////////////

let user = {
    firstName: 'Karl',
    lastName: 'Marks',
    social: {
        facebook: 'km11-fb',
        twitter: 'km25-twit'
    }
};

let {firstName: first, lastName: last, social: { facebook: fba }, ae = 17} = user;

console.log(first, last, fba, ae);

////////////////////////////////////////
// Function params as destrictured object


function post(url, {data: { firstName, lastName }, cache}) {
    console.log(firstName, lastName, cache);
}

let result = post('api/users', {data: user, cache: false});

////////////////////////////////////////
// Function returns object. 

function getUserInfo() {
    return {
        firstName: 'Allan',
        lastName: 'Kay',
        social: {
            facebook: 'ak-fb',
            twitter: 'ak-twit'
        }
    };
}

let {firstName: ffn, lastName: lln, social: { facebook: ffb } } = getUserInfo();

console.log(ffn, lln, ffb);