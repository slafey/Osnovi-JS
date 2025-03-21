const form = document.querySelector('form');
const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const result = document.getElementById('result');

function getResult() {
    result.innerHTML = `${day.value} ${month.value} ${year.value}`;
}

form.addEventListener('change', getResult);