const displayCounter = document.querySelector ('.display');
const minusButton = document.querySelector ('#minusButton');
const resetButton = document.querySelector ('#resetButton');
const plusButton = document.querySelector ('#plusButton');
let count =0;


minusButton.addEventListener ('click', countBackward);
resetButton.addEventListener ('click', reset);
plusButton.addEventListener ('click', countFoward );

function countFoward () {
    displayCounter.innerHTML = count++
}

function countBackward () {
    displayCounter.innerHTML = count--
}


function reset () {
    displayCounter.innerHTML = '0'
}

