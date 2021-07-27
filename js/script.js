'use strict';

const firstInput = document.getElementById('first-input');
const secondInput = document.getElementById('second-input');

const next = document.querySelector('.nxt');
const check = document.querySelector('.check');

const firstReset = document.querySelector('.first-reset');
const secondReset = document.querySelector('.second-reset');

const labelBill = document.querySelector('.label-bill');
const labelPaid = document.querySelector('.label-paid');
const labelReturned = document.querySelector('.label-returned');

let bill;
let received;
let returned

next.addEventListener('click', () => { 
    const enteredNumber = Number(firstInput.value); 

    if (enteredNumber === 0) {
        firstInput.value = '';
    }
    else if (enteredNumber > 0) {
        bill = enteredNumber;
        firstInput.value = bill + "  ✔️";
        next.style.display = 'none';
    }
    else {
        firstInput.value = '';
    }
});

firstReset.addEventListener('click', () => {
    firstInput.value = '';
    next.style.display = 'inline';
    bill = 0;
});


check.addEventListener('click', () => { 
    const enteredNumber = Number(secondInput.value); 

    if (enteredNumber === 0) {
        secondInput.value = '';
    }

    else if (enteredNumber === bill) { 
        received = enteredNumber;
        returned = bill - received;

        secondInput.value = received + "  ✔️";
        check.style.display = 'none';

        labelBill.textContent = bill;
        labelPaid.textContent = received;
        labelReturned.textContent = returned;
    }

    else if (enteredNumber > bill) {
        received = enteredNumber;
        returned =  received - bill;

        secondInput.value = received + "  ✔️";
        check.style.display = 'none';

        labelBill.textContent = bill;
        labelPaid.textContent = received;
        labelReturned.textContent = returned;
    }
    
    else {
        secondInput.value = '';
    }
});

secondReset.addEventListener('click', () => {
    secondInput.value = '';
});


