
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];

const min = 0;
const arrLength = colors.length;
const max = arrLength - 1;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};



let id = null;

const refs = {
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
    body: document.querySelector('body')
};

refs.startBtn.addEventListener('click', changeStart);
refs.stopBtn.addEventListener('click', changeStop);

function changeColor() {
    const index = randomIntegerFromInterval(min, max);
    refs.startBtn.setAttribute("disabled", "disabled");
    refs.body.style.backgroundColor = colors[index];
};

function changeStart() {
    id = setInterval(changeColor, 1000);
}

function changeStop() {
    refs.startBtn.removeAttribute("disabled")
    clearInterval(id)
};

