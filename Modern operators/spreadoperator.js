

const arr = [7,8,9];

const newArr = [1,2,...arr]

console.log(newArr);

console.log(...newArr);

const restaurant = {
    name: 'Classico Italiano',
    location: 'Via Angelo Tavanti 23, Firenze, Italy',
    categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
    starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
    mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  
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

    orderPasta: function (ing1,ing2,ing3){
        console.log(`pasta with indredients ${ing1},${ing2},${ing3}`);
    }

  };

  const newMenu = [...restaurant.mainMenu,'biriyani'];
  console.log(newMenu); 


  const mainMenuCopy = [...restaurant.mainMenu];

  const menu = [...restaurant.mainMenu,...restaurant.starterMenu];

  

  const str = 'rohit';

  const letter = [...str,'','S.'];

  console.log(letter);


  const newRestaurent = {...restaurant,founder:'ramese'};

  console.log(newRestaurent);