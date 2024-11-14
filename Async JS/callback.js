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
 // select container - 2 sec
 // select topping - 3 sec
 // serve ice cream - 2 sec

let order = (fruit_name,call_backProduction) => {
    console.log('order placed,call production');
    setTimeout(()=>{
        console.log(`${stocks.Fruits[fruit_name]} taken`);
        call_backProduction();
    },2000)
}

let production = () => {
    setTimeout(()=>{
        console.log('production started');
        setTimeout(()=>{
            console.log('fruit has been chopped');
            setTimeout(()=>{
                console.log(`adding ${stocks.liquid[0]} and ${stocks.liquid[1]} `);
                setTimeout(()=>{
                    console.log('starting the machine');
                    setTimeout(()=>{
                        console.log(`${stocks.holder[1]} selected`);
                        setTimeout(()=>{
                            console.log(`${stocks.toppings[0]} selected as topping`);
                            setTimeout(()=>{
                                console.log('ice cream served');
                            },2000)
                        },3000)
                    },2000)
                },1000)
            },1000)
        },2000)
    },0)
}

order(0,production);