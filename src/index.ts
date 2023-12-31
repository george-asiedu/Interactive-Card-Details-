const inputBox = document.querySelectorAll('.card-input-box') as NodeListOf<Element>;
const input = document.querySelectorAll('.card-input-box input') as NodeListOf<HTMLInputElement>;
const dateBlock = document.querySelector('.date-block') as Element;
const month = document.querySelector('#month') as HTMLInputElement;
const year = document.querySelector('#year') as HTMLInputElement;
const cvcInput = document.querySelector('#cvc') as HTMLInputElement;
const button = document.querySelector('#button') as HTMLButtonElement;
const thankyou = document.querySelector('.btn') as Element;

const newElement = (textNode: string): HTMLParagraphElement => {
    const errorMessage = document.createElement('p');
    errorMessage.classList.add('error');
    const text = document.createTextNode(textNode);
    errorMessage.appendChild(text);
    return errorMessage;
};

input[0].addEventListener('input', () => {
    const name = document.querySelector('.card-name') as Element;
    name.innerHTML = input[0].value;
});

input[1].addEventListener('input', () => {
    const number = document.querySelector('.card-number') as Element;
    number.innerHTML = input[1].value;
});

month.addEventListener('input', () => {
    const expiry = document.querySelector('.month-details') as Element;
    expiry.innerHTML = month.value;
});

year.addEventListener('input', () => {
    const expiry = document.querySelector('.year-details') as Element;
    expiry.innerHTML = year.value;
});

cvcInput.addEventListener('input', () => {
    const cvc = document.querySelector('.card-cvc') as Element;
    cvc.innerHTML = cvcInput.value;
});

button.addEventListener('click', () => {
    validateName();
    validateNumber();
    validateDate();
    validateCvc();

    if (input[0].value !== '' && input[1].value !== '' &&
        month.value !== '' && year.value !== '' && cvcInput.value !== '') {
        const confirm = document.querySelector('.confirm') as HTMLDivElement;
        const form = document.querySelector('form') as HTMLFormElement;
        confirm.style.display = 'block';
        form.style.display = 'none';
    }
});

thankyou.addEventListener('click', () => {
    const confirm = document.querySelector('.confirm') as HTMLDivElement;
    const form = document.querySelector('form') as HTMLFormElement;
    const name = document.querySelector('.card-name') as HTMLDivElement;;
    const number = document.querySelector('.card-number') as HTMLDivElement;;
    const month = document.querySelector('.month-details') as HTMLParagraphElement;
    const year = document.querySelector('.year-details') as HTMLSpanElement;
    const cvc = document.querySelector('.card-cvc') as HTMLDivElement;;

    confirm.style.display = 'none';
    form.style.display = 'block';

    name.innerHTML = 'DAMIAN SCOTT';
    number.innerHTML = '0000 0000 0000 0000';
    month.innerHTML = '00';
    year.innerHTML = '00';
    cvc.innerHTML = '000';
});

const validateName = (): void => {
    if (input[0].value === '') {
        const errorMessage = newElement("Please fill out this form");
        inputBox[0].appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
};

const validateNumber = (): void => {
    if (input[1].value === '') {
        const errorMessage = newElement("Please fill out this form");
        inputBox[1].appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    } else if (isNaN(Number(input[1].value))) {
        const errorMessage = newElement('Wrong format, numbers only');
        inputBox[1].appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
};

const validateDate = (): void => {
    if (month.value === '' || year.value === '') {
        const errorMessage = newElement("Can't be blank");
        dateBlock.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    } else if (isNaN(Number(month.value)) || isNaN(Number(year.value)) || Number(month.value) >= 12) {
        const errorMessage = newElement('Wrong format, numbers only');
        dateBlock.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
};

const validateCvc = (): void => {
    if (cvcInput.value === '') {
        const errorMessage = newElement("Can't be blank");
        const block = document.querySelector('.cvc-block') as HTMLDivElement;
        block.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    } else if (isNaN(Number(cvcInput.value))) {
        const errorMessage = newElement("Wrong format, numbers only");
        const block = document.querySelector('.cvc-block') as HTMLDivElement;
        block.appendChild(errorMessage);
        setTimeout(() => errorMessage.remove(), 3000);
    }
};
