// Shortcut for printing in JavaScript console


// getting references;
const main = document.querySelector(".container");
const form = document.querySelector("form");
const fullname = document.getElementById("fullname");
const email = document.getElementById("email");
const message = document.getElementById("message");
mailformat = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


let collectedData = {};

let errors = [];


function validateForm(ev) {

    ev.preventDefault();

    // validate full name
    if (fullname.value !== "") {
        collectedData.fullName = fullname.value;
        delete errors.ev;
    } else {
        errors.ev = "Full name is missing";
    }



    // validate email
    if (email.value !== "") {
        if (pattern.test(email.value)) {
            // add that value to collectedData.email
            collectedData.email = email.value;
            delete errors.em;
        } else {
            errors.em = "Email is invalid";
        }
    } else {
        errors.em = "Email is missing";
    }


    // validate message

    if (message.value !== "") {
        collectedData.message = message.value;
        delete errors.msg;
    } else {
        errors.msg = "Message name is missing.";
    }


    // feedback
    
    if (Object.keys(errors).length === 0) {
        console.log(collectedData);
    } else {
        console.log(errors)
    }

}

form.addEventListener("submit", validateForm);
