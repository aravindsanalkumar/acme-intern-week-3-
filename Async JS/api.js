// https://dog.ceo/api/breeds/image/random
// 🍎 ❌ 🍜 ✅

const dotImageDiv = document.getElementById('dogImage');

fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => {
        console.log(json);
        console.log(json.message);
        dotImageDiv.innerHTML = `<imgx src="${json.message}" width="300" alt="">`
    }) 


// You order 🍎 tomato soup
// Meanwhile you continue your chat with a friend
// RESOLVED - 🍜 Your server brings your soup
// REJECT - ❌ No soup today

const waitingForSoup = () => console.log('soup');

setTimeout(waitingForSoup,2000);

const promise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        isReady = false;
        isReady ? resolve('✅ soup is ready'):reject('❌ no soup today');
    },3000)
})

console.log(promise1);

promise1
    .then(value => console.log(value))
    .catch(err => console.log(err))
    .finally(()=>{
        console.log('restaurent closed');
    })

