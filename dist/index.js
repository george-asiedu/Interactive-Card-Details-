"use strict";
const inputBox = document.querySelectorAll('.card-input-box');
const input = document.querySelectorAll('.card-input-box input');
const dateBlock = document.querySelector('.date-block');
const month = document.querySelector('#month');
const year = document.querySelector('#year');
const cvcInput = document.querySelector('#cvc');
const button = document.querySelector('#button');
const thankyou = document.querySelector('.btn');
const newElement = (textNode) => {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    const text = document.createTextNode(textNode);
    errorMessage.appendChild(text);
    return errorMessage;
};
input[0].addEventListener('input', () => {
    const name = document.querySelector('.card-name');
    name.innerHTML = input[0].value;
});
input[1].addEventListener('input', () => {
    const number = document.querySelector('.card-number');
    number.innerHTML = input[1].value;
});
month.addEventListener('input', () => {
    const expiry = document.querySelector('.month-details');
    expiry.innerHTML = month.value;
});
year.addEventListener('input', () => {
    const expiry = document.querySelector('.year-details');
    expiry.innerHTML = year.value;
});
cvcInput.addEventListener('input', () => {
    const cvc = document.querySelector('.card-cvc');
    cvc.innerHTML = cvcInput.value;
});
button.addEventListener('click', () => {
    validateName();
    validateNumber();
    validateDate();
    validateCvc();
    if (input[0].value !== '' && input[1].value !== '' &&
        month.value !== '' && year.value !== '' && cvcInput.value !== '') {
        const confirm = document.querySelector('.confirm');
        const form = document.querySelector('form');
        confirm.style.display = 'block';
        form.style.display = 'none';
    }
});
thankyou.addEventListener('click', () => {
    const confirm = document.querySelector('.confirm');
    const form = document.querySelector('form');
    const name = document.querySelector('.card-name');
    ;
    const number = document.querySelector('.card-number');
    ;
    const month = document.querySelector('.month-details');
    const year = document.querySelector('.year-details');
    const cvc = document.querySelector('.card-cvc');
    ;
    confirm.style.display = 'none';
    form.style.display = 'block';
    name.innerHTML = 'DAMIAN SCOTT';
    number.innerHTML = '0000 0000 0000 0000';
    month.innerHTML = '00';
    year.innerHTML = '00';
    cvc.innerHTML = '000';
});
const validateName = () => {
    if (input[0].value === '') {
        const errorMessage = newElement("Please fill out this form");
        inputBox[0].appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
};
const validateNumber = () => {
    if (input[1].value === '') {
        const errorMessage = newElement("Please fill out this form");
        inputBox[1].appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
    else if (isNaN(Number(input[1].value))) {
        const errorMessage = newElement('Wrong format, numbers only');
        inputBox[1].appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
};
const validateDate = () => {
    if (month.value === '' || year.value === '') {
        const errorMessage = newElement("Can't be blank");
        dateBlock.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
    else if (isNaN(Number(month.value)) || isNaN(Number(year.value)) || Number(month.value) >= 12) {
        const errorMessage = newElement('Wrong format, numbers only');
        dateBlock.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
};
const validateCvc = () => {
    if (cvcInput.value === '') {
        const errorMessage = newElement("Can't be blank");
        const block = document.querySelector('.cvc-block');
        block.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
    else if (isNaN(Number(cvcInput.value))) {
        const errorMessage = newElement("Wrong format, numbers only");
        const block = document.querySelector('.cvc-block');
        block.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
};
