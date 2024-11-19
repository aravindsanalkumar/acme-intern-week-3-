'use strict'

const tata = {
    airline : 'Indigo',
    code:'IN',
    bookings:[],
    book:function(flightNum,name){
        console.log(`${name} booked a seat on ${this.airline} flight ${this.code}${flightNum}`);
        this.bookings.push({
            flight:`${this.code}${flightNum}`,
            name:`${name}`,
        })
    },
}


tata.book(293,'aravind');
tata.book(396,'sam');

console.log(tata.bookings);

const reliance = {
    airline : 'Air India',
    code:'AIR',
    bookings:[],
}

const book = tata.book;
//book(32,'jack');//why this wont work

book.call(reliance,23,'madhavi');
book.call(reliance,45,'gowri');

console.log(reliance.bookings);

console.log(reliance);

const virigin = {
    airline : 'Vistara',
    code:'VR',
    bookings:[],
}

book.call(virigin,345,'mary cooper');



const flightData = ['578','Nithin'];

book.apply(virigin,flightData);

console.log(virigin.bookings);


const bookIndigo = book.bind(virigin);
bookIndigo('54','steve');




