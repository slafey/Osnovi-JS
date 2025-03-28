let button = document.querySelector('.prize__button');
let result = document.querySelector('.prize__result');
let prize = document.getElementsByClassName('prize');

function getCard() {
    let prizeNumber = [];

    for (let i = 0; i < prize.length; i++) {
        let numberElement = prize[i].querySelector('.prize__number').textContent;
        prizeNumber.push(parseInt(numberElement));
    }

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