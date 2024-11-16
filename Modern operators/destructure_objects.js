'use strict';

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],

    order:function(startedIndex,mainIndex){

        return [this.starterMenu[startedIndex],this.mainMenu[mainIndex]];
    },

    orderDelivery : function({startedIndex,mainIndex,time,address}){
        console.log(`order received ${this.starterMenu[startedIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`);

    },
  
    openingHours: {
      thu: {
        open: 12,
        close: 22,
      },
      fri: {
        open: 11,
        close: 23,
      },
      sat: {
        open: 0, // Open 24 hours
        close: 24,
      },
    },
  };

restaurant.orderDelivery({
    time:'22:30',
    address:'y street',
    mainIndex:2,
    startedIndex:1

})  

const {name,openingHours,categories} = restaurant;

//console.log(name,openingHours,categories)

const {
    name:restaurantName,
    openingHours:hours,
    categories:tags,
} =restaurant;

//console.log(restaurantName,hours,tags);


const {menu = [],starterMenu:starter = []} = restaurant;

//console.log(menu,starter);

//switching or mutating variables 

let a = 111;
let b = 999;

const obj = {
    a:23,
    b:7,
    c:14
}

//{a,b} = obj;//will lead to error


const {fri:{open:o,close:c}} = openingHours;

console.log(open,close);
