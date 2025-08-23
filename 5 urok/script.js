let border = document.querySelector('.road');

let white = document.querySelectorAll('.white');
let black = document.querySelectorAll('.black');

let buttonUp = document.querySelector(".buttonUp");
let buttonDown = document.querySelector(".buttonDown");

border.style.border = '2px solid black';

black.forEach(element => {
    element.style.backgroundColor = 'black'
});

function addArrow(direction) {
    white.forEach(element => {
        element.innerHTML = "";
        let image = document.createElement("img");
        image.src = 'arrow.svg';
        image.style.display = "block";
        image.style.margin = '0 auto';
        image.style.width = "40px";
        image.style.height = "40px";
        if (direction === 'down') {
            image.style.transform = 'rotate(180deg)';
        }
        element.appendChild(image);
    });
}

buttonUp.addEventListener("click", () => addArrow('up'));
buttonDown.addEventListener("click", () => addArrow('down'));
