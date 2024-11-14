// higher order functions

//map - loops and returns an array
//filter - loops and returns an array with matching conditions
//reduce - amazing usecase of summing

//MAP
[1,2,3,4].map(number => console.log(number));

let result = [1,2,3,4].map(number => number * 2);

console.log(result);


//FILTER
// manual way of filtering data from array
const filter = (arr,greaterThan) =>{
    let result = [];
    arr.forEach(number => {
        if(number > greaterThan){
            result.push(number);
        }
    });
    return result;
}

console.log(filter([1,2,3,4,5,6],4));


const nums = [1,2,3,4,5,6];

result = nums.filter(num => num > 4 || num < 2 );

console.log(result);


const actors = [
    {name:'johnny' , netWorth:2000000},
    {name:'dicaprio' , netWorth:5000000},
    {name:'bradpit',netWorth:3000000},
    {name:'kate',netWorth:1000000},
]

const highPaidActor = actors.filter(actor => actor.netWorth > 2500000 );
console.log(highPaidActor);

console.log(JSON.stringify(highPaidActor));

let names = highPaidActor.map(actor => actor.name).join(',');

console.log(names);

//REDUCE
const data = [1,2,3,4];

result = data.reduce(function(prev,curr){
    return prev + curr;
})

console.log(result);

result = data.reduce((prev,curr)=> prev + curr);

console.log(result);

