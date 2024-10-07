let redCircle = document.getElementById('red');
let greenCircle = document.getElementById('green');
let result = document.getElementById('result');


function isGreen() {
    console.log('Зеленый');
    if (greenCircle.style.backgroundColor == 'green') {
        greenCircle.style.backgroundColor = 'gray';
        redCircle.style.backgroundColor = 'gray';
        form.result.value = '';
    } else {
        greenCircle.style.backgroundColor = 'green';
        redCircle.style.backgroundColor = 'gray';
        form.result.value = 'Можно идти';
    }
}

function isRed() {
    console.log('Красный');
    if (redCircle.style.backgroundColor == 'red') {
        greenCircle.style.backgroundColor = 'gray';
        redCircle.style.backgroundColor = 'gray';
        form.result.value = '';
    } else {
        greenCircle.style.backgroundColor = 'gray';
        redCircle.style.backgroundColor = 'red';
        form.result.value = 'Идти нельзя';
    }
}

redCircle.addEventListener('click', isRed);
greenCircle.addEventListener('click', isGreen);