const counterDisplay = document.getElementById('display');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');


let counter = 0;

incrementButton.addEventListener('click', () => {
    counter++;
    counterDisplay.innerText = counter;
});

decrementButton.addEventListener('click', () => {
    counter--;
    counterDisplay.innerText = counter;
});

resetButton.addEventListener('click', () => {
    counter = 0;
    counterDisplay.innerText = counter;
});
