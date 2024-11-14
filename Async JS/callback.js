// ===== BASIC IDEA OF CALLBACK FUNCTION

function one(call_back){
    console.log('step 1');
    setTimeout(()=>{
        call_back();
    },2000)
    
}


function two(){
    console.log('step 2 took 2 sec')
}



// order from the customer
// fetch the ingredients
// start production
// serve

let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 // place order - 2 sec
 // cut the fruit - 2 sec
 // add water and ice - 1 sec
 // start the machine - 1 sec
 // select container - 2
 // select topping -3
 // serve ice cream -2

let order = (call_back) => {
    console.log('order placed , call production');
    setTimeout(()=>{
        call_back();
    },2000)
}


let production = () => {
    console.log('order received in 2 sec , starting production');
}

order(production);