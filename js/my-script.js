/*
Stuart Rimel
Intro to WebDev
Summer 2022

Final project javascript implementation file. 

*/

// This part will get today's date and adds it to a span element within my previous work section
let mark = document.querySelector('#curr-date');
let today = new Date();
mark.textContent = `${today.getMonth()+1}/${today.getDate()}/${today.getFullYear()}`;

let devNull = {};
let form = document.querySelector('form');
form.addEventListener('submit', handleSubmit);

//Collects data submitted to the contact form. Set a breakpoint here to see the console log output...
function handleSubmit(event) {
    let user = checkInput(document.getElementById('name').value);
    let email = document.getElementById('email').value;
    let msg = document.getElementById('textArea').value;
    console.log(
        `Form Submission
        Name: ${user}
        Email: ${email}
        Message: ${msg}`
    );
    // Puts data in an object to theoretically do something with the server...
    devNull['name'] = user; 
    devNull['email'] = email;
    devNull['message'] = msg;
}

function checkInput(input) {
    if(input === "") {
        return "null";
    }
    return input;
}