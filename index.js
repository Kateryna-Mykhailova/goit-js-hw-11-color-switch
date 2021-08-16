
const refs = {
    days: document.querySelector('[data-value = "days"]'),
    hours: document.querySelector('[data-value = "hours"]'),
    minutes: document.querySelector('[data-value = "mins"]'),
    seconds: document.querySelector('[data-value = "secs"]')
};



const CountdownTimer = {
    selector: '#timer-1',
    targetDate: new Date('Aug 18, 2021'),
    

};


function createTime() {
    const dataEnd = CountdownTimer.targetDate.getTime();


const startTime = Date.now();



const time = dataEnd - startTime;


const days = Math.floor(time / (1000 * 60 * 60 * 24));

const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
const secs = Math.floor((time % (1000 * 60)) / 1000);
refs.days.textContent = days < 10 ? `0${days}` : days;
refs.hours.textContent = hours < 10 ? `0${hours}` : hours ;
refs.minutes.textContent = mins < 10 ? `0${mins}` : mins;
    refs.seconds.textContent = secs <10 ? `0${secs}` : secs;
};

let id = null;

function timerStart() {
   id =  setInterval(createTime, 100);
   
}
timerStart();

function clg() { console.log("run"); };


// function timerStart() {
//    id =  setInterval(clg, 1000);
   
// }

function stopTimer() {
    if (startTime === dataEnd) {
        clearInterval(id)
    }  
}

// 
// console.log(this.dataEnd);
 


// new CountdownTimer({     

    
// });          



//Для подсчета значений используй следующие готовые формулы, где time - разница между targetDate и текущей датой.

/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);