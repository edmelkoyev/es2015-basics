function applyForVisa(documents) {
    console.log('Processing Application...');
    let promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            let vId = Math.random();
            vId > .1 ? resolve({visaId: vId}) : reject('Application rejected: missing photo');
        }, 2000);
    });

    return promise;
}

function getVisa(visa){
    console.info('Visa provided');
    return new Promise(function (resolve, reject) {
        resolve(visa);
    });
}

function bookHotel(visa) {
    console.log('Booking Hotel ...');
    console.log('VISA', visa);
    let booking = {
        visa,
        roomNumber: 2125
    };
    return new Promise(function(resolve, reject){
        setTimeout(function() {
            Math.random() > 0.5 ? resolve(booking) : reject("No rooms available");
        }, 2000);
    });
}

function buyTickets(booking) {
    console.log('Buying tickets ...');
    console.log('Booking', booking);
    return Promise.resolve({ticketId: 'T5622'}); 
}

applyForVisa({})
    .then(getVisa)
    .then(bookHotel)
    .then(buyTickets)
    .then( ticket => console.info('Ready to vacation, ticket', ticket))
    .catch(error => console.error(error))