const form = document.getElementById('myForm');
const scriptURL = 'https://script.google.com/macros/s/AKfycbzUR2-rzpv0IjySHtguBSSBnBVEjTIZ2NntMkavO1IqvUqlbGDFGdQK9c3Ye50e3Tk/exec';



form.addEventListener('submit', e => {
  e.preventDefault();
  fetch(scriptURL, { method: 'POST', body: JSON.stringify(Object.fromEntries(new FormData(form))) })
    .then(response => console.log('Success!', response))
    .catch(error => console.error('Error!', error.message));
});