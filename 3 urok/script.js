const day = document.getElementById('day');
const month = document.getElementById('month');
const year = document.getElementById('year');
const result = document.getElementById('result');

function getResult(type) {
    if (type === 'day') {
        console.log(`${day.value}`);
    } else if (type === 'month') {
        console.log(`${month.value}`);
    } else if (type === 'year') {
        console.log(`${year.value}`);
    }

    result.innerHTML = `${day.value} ${month.value} ${year.value}`;
}

day.addEventListener('change', () => getResult('day'));
month.addEventListener('change', () => getResult('month'));
year.addEventListener('change', () => getResult('year'));