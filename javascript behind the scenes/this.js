'use strict'

//console.log(this);

const calcAge = function(birthYear){
    console.log(2037 - birthYear);
    console.log(this);
}

//calcAge(1991);
//arrow func uses lexical this keyword which is the window right here
const calcAgeArrow = (birthYear) => {
    console.log(2037 - birthYear);
    console.log(this);
}

calcAgeArrow(1991);

// this keyword always points to the object calling the method

const person = {
    year : 1991,
    calcAge: function(){
        console.log(this);
        console.log(2040 - this.year);
    }
}

person.calcAge();


const professor = {
    year : 2017,
};

professor.calcAge = person.calcAge

professor.calcAge();

const f = person.calcAge;

console.log(`this is value of f:${f}`);

f();// this is undefined 
