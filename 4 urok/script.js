let button = document.querySelector('.prize__button');
let result = document.querySelector('.prize__result');
let prize = document.querySelectorAll('.prize');

let prizeNumber = [];

let prizeNumberElements = document.querySelectorAll('.prize__number');

for (let i = 0; i < prize.length; i++) {
    prizeNumber.push(parseInt(prizeNumberElements[i].textContent));
}

function getCard() {
    let randomIndex = Math.floor(Math.random() * prizeNumber.length);
    let selectedPrize = prizeNumber[randomIndex];

    for (let i = 0; i < prize.length; i++) {
        prize[i].classList.remove('active');

        if (prizeNumber[i] == selectedPrize) {
            prize[i].classList.add('active');
        }
    }

    result.innerHTML = selectedPrize;
}

button.addEventListener('click', getCard)