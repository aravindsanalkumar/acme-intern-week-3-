

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

 let is_shop_open = false;


 function time(ms){
    return new Promise((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(resolve,ms);
        }
        else{
            reject(console.log('shop is closed'));
        }
    })
 }

 async function kitchen() {
    try{
        await time(2000);
        console.log(`${stocks.Fruits[0]} selected`);
        await time(0);
        console.log('start the production');
        await time(2000);
        console.log('cut the fruits');
        await time(1000);
        console.log('water and ice added');
        await time(3000);
        console.log('toppings added');
        await time(1000);
        console.log('ice cream served');
    }
    catch(error){
        console.log('customer left',error)
    }
    finally{
        console.log('day ended,shop closed');
    }
 }

 kitchen();