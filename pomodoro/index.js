// const minutes = document.querySelector('.pomodoro__minutes');
// const seconds = document.querySelector('.pomodoro__seconds');
// const startBtn = document.querySelector('.pomodoro__start');

// let minutesTime = 1;
// let secondsTime = 0;
// let breakTime = 1;

// function startTimer() {
//     secondsTime = 3;

//     let workMinutes = minutesTime - 1;
//     let breakMinutes = breakTime - 1;

//     let breakCounter = 0;

//     const timer = () => {
//         minutes.textContent = workMinutes;
//         seconds.textContent = secondsTime > 9 ? secondsTime : `0${secondsTime}`;

//         secondsTime = secondsTime - 1;

//         if (secondsTime === -1) {
//             workMinutes = workMinutes - 1;
//             secondsTime = 3;

//             if (workMinutes === -1 && breakCounter % 2 == 0) {
//                 workMinutes = breakMinutes;
//                 breakCounter++;
//             } else {
//                 workMinutes = minutesTime;
//                 breakCounter++;
//             }
//         }
//     };

//     setInterval(timer, 1000);
// };

// startBtn.addEventListener('click', () => {
//     startTimer();
// });

import Pomodoro from "./components/Pomodoro.js";

const pomodoro = new Pomodoro('.pomodoro__block');
pomodoro.setEventListeners();