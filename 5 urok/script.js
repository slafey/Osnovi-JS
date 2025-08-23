let border = document.querySelector('.road');
border.style.border = '2px solid black';

let white = document.querySelectorAll('.white');
let black = document.querySelectorAll('.black');

let buttonUp = document.querySelector(".buttonUp");
let buttonDown = document.querySelector(".buttonDown");

black.forEach(element => {
    element.style.backgroundColor = 'black'
});

buttonUp.addEventListener("click", () => console.log('Вверх'));
buttonDown.addEventListener("click", () => console.log('Вниз'));