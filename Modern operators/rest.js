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
  };


const [a,b,...other] = [1,2,3,4,5];

console.log(other);

const[pizza, , biriyani,...otherFood]=[...restaurant.mainMenu,...restaurant.starterMenu];

console.log(pizza,biriyani,otherFood)


const {sat, ...weekdays} = restaurant.openingHours;

console.log(weekdays);


const add = function (...numbers){
  let sum = 0;
  console.log(numbers);
  for(let i = 0; i<numbers.length; i++){
      sum += numbers[i];
  }
  console.log(sum)
}

add(5,6,8,4,5);