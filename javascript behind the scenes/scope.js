//'use strict';
// func are block scoped only in strict mode

function calcAge(birthYear){
    const age = 2037 - birthYear
    
    function printAge(){
        let output = `you are ${age}  born in ${birthYear} and your name is ${firstName}`;
        console.log(output);

        if(birthYear > 2000){
            const firstName = 'aravind';
            const str = `you are young ${firstName}`;
            var data = 'there is data';
            console.log(str);

            function add(a,b){
                return a + b;
            }

        }
        //console.log(str);
        output = 'NEWOUTPUT';
        console.log(output);
        console.log(data);
        let x = add(2,3);
        console.log(x)
    }

    printAge();
    return age;
}

const firstName = 'sam';

calcAge(2005);