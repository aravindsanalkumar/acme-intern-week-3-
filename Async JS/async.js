// try catch handler
// await 


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

let toppings_choice = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve(console.log('which topping would u like?'));
        },3000);
    })
}

async function kitchen(){
    console.log('A');
    console.log('B');
    console.log('C');

    await toppings_choice();

    console.log('D');
    console.log('E');
}

 kitchen();

 console.log('cleaning the dishes');
 console.log('cooking');
 console.log('cleaning the tables');