
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
    refs.startBtn.setAttribute("disabled", "disabled");
    console.log('начало');
    refs.body.style.backgroundColor = colors[randomIntegerFromInterval(min, max)];
};

function changeStart() {
    id = setInterval(changeColor, 1000);
}

function changeStop() {
    refs.startBtn.removeAttribute("disabled")
    clearInterval(id)
};


// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const randomIntegerFromInterval = '#795548'


// const refs = {
//     days: document.querySelector('[data-value = "days"]'),
//     hours: document.querySelector('[data-value = "hours"]'),
//     minutes: document.querySelector('[data-value = "mins"]'),
//     seconds: document.querySelector('[data-value = "secs"]')
// };



// const CountdownTimer = {
//     selector: '#timer-1',
//     targetDate: new Date('Aug 18, 2021'),


// };


// function createTime() {
//     const dataEnd = CountdownTimer.targetDate.getTime();


//     const startTime = Date.now();



//     const time = dataEnd - startTime;


//     const days = Math.floor(time / (1000 * 60 * 60 * 24));

//     const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//     const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
//     const secs = Math.floor((time % (1000 * 60)) / 1000);
//     refs.days.textContent = days < 10 ? `0${days}` : days;
//     refs.hours.textContent = hours < 10 ? `0${hours}` : hours;
//     refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
//     refs.seconds.textContent = secs < 10 ? `0${secs}` : secs;
// };

// let id = null;

// function timerStart() {
//     id = setInterval(createTime, 100);

// }
// timerStart();

// function clg() { console.log("run"); };




// function stopTimer() {
//     if (startTime === dataEnd) {
//         clearInterval(id)
//     }
// }



//dj


//class StopWatch {
// constructor() {
//     // this = {}
//     this.refs = {
//         start: document.querySelector("#start"),
//         stop: document.querySelector("#stop"),
//         sec: document.querySelector(".seconds"),
//         min: document.querySelector(".minutes"),
//     };
//     this.id = null;
//     this.startDate = null;

//     // this.timerStart = this.timerStart.bind(this);
//     // this.timerStop = this.timerStop.bind(this);

//     // this = {refs, id, startDate, timerStart, timerStop}
// }

// calc = () => {
//     const currentDate = Date.now();
//     const delta = (currentDate - this.startDate) / 1000;
//     const sec = Math.floor(delta % 60);
//     const min = Math.floor(delta / 60);
//     this.refs.sec.textContent = sec < 10 ? `0${sec}` : sec;
//     this.refs.min.textContent = min < 10 ? `0${min}` : min;
// };

// timerStart = () => {
//     this.startDate = Date.now();
//     this.id = setInterval(this.calc, 1000);
// };

// timerStop = () => {
//     clearInterval(this.id);
// };

//   // init() {
//   //   this.refs.start.addEventListener("click", this.timerStart);
//   //   this.refs.stop.addEventListener("click", this.timerStop);
//   // }
// }

// const watch = new StopWatch();
// window.addEventListener("DOMContentLoaded", watch.timerStart);

// // watch.init();
// console.log(watch);
