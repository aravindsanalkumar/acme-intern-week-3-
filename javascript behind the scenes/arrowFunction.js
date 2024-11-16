'use strict';

var firstName = 'global'

const person = {
    firstName : 'sam',
    year:1991,

    calcAge : function(){
        //console.log(this);
        console.log(2040 - this.year);

        const isMillenial = function(){
            console.log(this);// hw u can solve this
        }
        isMillenial();
    },

    greet: () => {
        //console.log(this);
        console.log(`hey ${this.firstName}`)

    }

}

person.calcAge();
person.greet();



