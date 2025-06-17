let counter = getSubmitCounter() || 0;
let revCounter = document.querySelector('#reviewCounter');

function setSubmitCounter() {
    localStorage.setItem('submitCounter', String(++counter));
}


function getSubmitCounter() {
    let num = localStorage.getItem('submitCounter');
    return num ? num.toString() : false;
}


setSubmitCounter();
revCounter.textContent = counter;
