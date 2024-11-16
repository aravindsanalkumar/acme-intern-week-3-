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


  const arr = [1,2,3,4,5];

  const [a,b,c] = arr;
  console.log(a,b,c);

  const [x, ,y,z] = arr;
  console.log(x,y,z);

  let [first , ,third] = restaurant.categories;

  console.log(first,third);

  let [main,secondary] = [third,first];

  console.log(main,secondary)

  let newOrder = restaurant.order(2,0);

  const [starter,maincourse] = restaurant.order(2,0);
  console.log(starter,maincourse);

  console.log(newOrder);