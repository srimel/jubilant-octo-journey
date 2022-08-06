let mark = document.querySelector('#curr-date');
let today = new Date();
mark.textContent = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;