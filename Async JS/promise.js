// pending
// resolve .then .then
// reject 
// catch 
// finally


// relation ship between time and work
// promise chaining
// error handling
// finally handler

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

let is_shop_open = true;

let order = (time,callback_production) => {
    return new Promise ((resolve,reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(callback_production());
            },time)
        }
        else{
            reject('shop is closed')
        }
    })
}

order(2000,()=>console.log(`${stocks.Fruits[0]} taken`))
.then(()=>{
    return order(0,()=>console.log('production has started'));
})
.then(()=>{
    return order(2000,()=>console.log('fruits are chopped'));
})
.then(()=>{
    return order(1000,()=>console.log('water and ice added'));
})
.then(()=>{
    return order(2000,()=>console.log('container selected'));
})
.then(()=>{
    return order(3000,()=>console.log('toppings are added'));
})
.then(()=>{
    return order(2000,()=>console.log('ice cream is served'));
})