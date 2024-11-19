
let scriptURL = 'https://script.google.com/macros/s/AKfycbzUR2-rzpv0IjySHtguBSSBnBVEjTIZ2NntMkavO1IqvUqlbGDFGdQK9c3Ye50e3Tk/exec';


let name = document.getElementById('name');
let phone = document.getElementById('phone');
let email = document.getElementById('email');
label_name = document.getElementById('label_name');
label_phone = document.getElementById('label_phone');
label_email = document.getElementById('label_email');
let form = document.getElementById('form')




form.addEventListener('submit', e => {
    e.preventDefault()
    validateInput();
  })
  





const validateInput = () =>{

    let isValid = true;
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(name.value === ''){
        label_name.innerText = 'Please enter your name correctly';
        label_name.style.color = 'red';
        name.style.borderColor = 'red';
        isValid = 'false';
    }
    else{
        label_name.innerText = 'Name';
        label_name.style.color = 'black';
        name.style.borderColor = 'lightgrey';

    }
    if(phone.value === '' ){
        label_phone.innerText = 'Please enter your Phone Number';
        label_phone.style.color = 'red';
        phone.style.borderColor = 'red';
        isValid = false;
    }
    else{
        label_phone.innerText = 'Phone';
        label_phone.style.color = 'black';
        phone.style.borderColor = 'lightgrey';
    }
    if(email.value === ''){
        label_email.innerText = 'Enter Valid email';
        label_email.style.color = 'red';
        email.style.borderColor = 'red';
        isValid = 'false';
    }
    else{
        label_email.innerText = 'Email';
        label_email.style.color = 'black';
        email.style.borderColor = 'lightgrey';
    }
    if(!email.value.match(validRegex)){
        label_email.innerText = 'Your email is invalid,please enter correct email';
        label_email.style.color = 'red';
        email.style.borderColor = 'red';
        isValid = 'false';
    }
    else{
        label_email.innerText = 'Email';
        label_email.style.color = 'black';
        email.style.borderColor = 'lightgrey';
    }

    if(isValid === true){
        console.log('submitted');

        fetch(scriptURL, { method: 'POST', body: JSON.stringify(Object.fromEntries(new FormData(form))) })
        .then(response => console.log('Success!', response))
        .catch(error => console.error('Error!', error.message));

        name.value = '';
        phone.value = '';
        email.value = ''

    }
    else{
        console.log('not submitted');
    }

}