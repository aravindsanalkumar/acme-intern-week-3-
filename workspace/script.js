'use strict'

//=========================scope=================================
// const firstName = 'jonas';

// function calcAge(birthYear){
//     const age = 2037 - birthYear;

//     function printAge(){
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Steven';
      
//             output = 'NEW OUTPUT!';
      
//             const str = `Oh, and you're a millenial, ${firstName}`;
//             console.log(str);
      
//             function add(a, b) {
//               return a + b;
//             }
//             const x = add(2,4);
//             console.log(output);
//         }
//           //console.log(str);
//           console.log(millenial);
//           //console.log(add(5,5));
//     }
    
//     printAge();
// }

// calcAge(1991);

//1 check scope of age
//2 how ouput works with variable lookup
//3 why print age func cannot be called outside the calcAge 
//4 create a block scope with variables and function 
//5 const and let variables are block scoped 
//6 str cannot be printed outside the if block 
//7 var is never block scope but is a function scope
//8 why funcitons are block scoped 
//9 function cant be called outside the scope of the block in strict mode
//10 declare variable in block scope to avoid lookup 
//11 redefine a variabe form parent scope 


// =============================hoisting==============

//1 how var let and const are hoisted
//2 function hoisting 
//3 arrow function hoisting 
//4 use case scenario of var causing serious bugs in the program


//console.log(me);
//console.log(job);
//console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// addDecl(2,3);

//addExpr(3,4); //==> give error
 
//addArrow(2,3);//===> gives error


// function addDecl(a, b) {
//     return a + b;
//   }
  
// const addExpr = function (a, b) {
//     return a + b;
// };

// var addArrow = (a, b) => a + b;

// if(!numProducts){
//     deleteShoppingCart();
// }


// var numProducts = 10;

// function deleteShoppingCart(){
//     console.log('all productions are deleted');
// }

// this keyword===========================================>

// apply for function expression 
// apply for arrow function 
// apply for objects

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);// will point to window obj if not in strict mode
// };
// calcAge(1991);


// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);


// const jonas = {
//     year: 1991,
//     calcAge: function () {
//       console.log(this);
//       console.log(2037 - this.year);
//     },
// };
// jonas.calcAge();

// const matilda = {
//     year: 2017,
//   };
  
// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();


// Regular function vs arrow functions

// var firstName = 'madhavi';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//       console.log(this);
//       console.log(2037 - this.year);
//       console.log(`Hey ${this.firstName}`);

//       const isMillenial = () =>{
//         console.log(this);
//         console.log(this.year >= 1981 && this.year <= 1996);
//       };
//       isMillenial();

//     },
  
//     greet: () => {
//       console.log(this);
//       console.log(`Hey ${this.firstName}`);
//     },

// };

// jonas.calcAge();
// jonas.greet();

// why this keyword in arrow function points to firstName when declared in var;
// because var is there in window object where let and const are not there
// issue of this keyword
// regular function inside a method the this keyword would be undefined 
// arrow function inside a method the this keyword would be pointing to the object
// what is argument keyword

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
        open: 0, 
        close: 24,
      },
    },
  };

//==========destructureing arrays

//   let [main,secondary] = restaurant.categories;

//   console.log(main,secondary);

//   [main,secondary] = [secondary,main];

//   console.log(main,secondary);

//   const [starter,mainCourse] = restaurant.order(2,2);

//   console.log(starter,mainCourse);


//============destructuring objects


const {name,openingHours,categories} = restaurant;

//console.log(name,openingHours,categories);

const {
    name:restaurentName,
    openingHours:hours,
    categories:tags
} = restaurant;



//console.log(restaurentName,hours,tags);

const {mainMenu,starterMenu} = {restaurant};

console.log(mainMenu,starterMenu);
