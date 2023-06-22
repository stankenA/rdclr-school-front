export default class Pomodoro {
    constructor(pomodoroSelector) {
        this._pomodoro = document.querySelector(pomodoroSelector);
        this._minutesValue = this._pomodoro.querySelector('.pomodoro__minutes');
        this._secondsValue = this._pomodoro.querySelector('.pomodoro__seconds');
        this._startBtn = this._pomodoro.querySelector('.pomodoro__start');

        this._minutes = 25;
        this._seconds = 0;

        this._workTime = 25;
        this._restTime = 5;
        this._longRestTime = 15;
        this._pomodoroCounter = 0;

        this._mainPomodoroBtn = this._pomodoro.querySelector('.pomodoro__button_main');
        this._shortBreakBtn = this._pomodoro.querySelector('.pomodoro__button_short');
        this._longBreakBtn = this._pomodoro.querySelector('.pomodoro__button_long');
        this._resetBtn = this._pomodoro.querySelector('.pomodoro__reset');

        this._interval = null;

        this._popup = this._pomodoro.querySelector('.pomodoro__popup');
        this._popupBtn = this._pomodoro.querySelector('.pomodoro__open-popup');

        this._form = this._pomodoro.querySelector('.pomodoro__popup-form');
        this._inputMain = this._pomodoro.querySelector('.pomodoro__input_main');
        this._inputShort = this._pomodoro.querySelector('.pomodoro__input_short');
        this._inputLong = this._pomodoro.querySelector('.pomodoro__input_long');
        this._setBtn = this._pomodoro.querySelector('.pomodoro__timesetter');
    }

    _resetBtns() {
        this._mainPomodoroBtn.classList.remove('pomodoro__button_active');
        this._shortBreakBtn.classList.remove('pomodoro__button_active');
        this._longBreakBtn.classList.remove('pomodoro__button_active');
    }

    _startTimer() {
        const timer = () => {
            this._minutesValue.textContent = this._workTime;
            this._secondsValue.textContent = this._seconds > 9 ? this._seconds : `0${this._seconds}`;

            this._seconds = this._seconds - 1;

            if (this._seconds === -1) {
                this._workTime = this._workTime - 1;
                this._seconds = 59;

                if (this._workTime === -1) {
                    if (this._pomodoroCounter % 4 === 0 && this._pomodoroCounter !== 0) {
                        this._workTime = this._longRestTime - 1;
                        this._pomodoroCounter++;
                        this._resetBtns();
                        this._longBreakBtn.classList.add('pomodoro__button_active');
                    } else if (this._pomodoroCounter % 2 === 0) {
                        this._workTime = this._restTime - 1;
                        this._pomodoroCounter++;
                        this._resetBtns();
                        this._shortBreakBtn.classList.add('pomodoro__button_active');
                    } else {
                        this._workTime = this._minutes - 1;
                        this._pomodoroCounter++;
                        this._resetBtns();
                        this._mainPomodoroBtn.classList.add('pomodoro__button_active');
                    }
                }
            }
        }

        if (this._startBtn.textContent === 'Start') {
            this._interval = setInterval(timer, 1000);
            this._startBtn.textContent = 'Stop';
        } else {
            clearInterval(this._interval);
            this._startBtn.textContent = 'Start';
        }

    }

    _resetTimer() {
        clearInterval(this._interval);
        this._seconds = 0;
        this._workTime = 25;

        this._startBtn.textContent = 'Start';
        this._minutesValue.textContent = this._workTime;
        this._secondsValue.textContent = this._seconds > 9 ? this._seconds : `0${this._seconds}`;

        this._resetBtns();
        this._mainPomodoroBtn.classList.add('pomodoro__button_active');
    }

    _setNewTime() {
        this._workTime = this._inputMain.value;
        this._restTime = this._inputShort.value;
        this._longRestTime = this._inputLong.value;

        this._minutesValue.textContent = this._workTime;
    }

    _openPopup() {
        this._popup.classList.add('pomodoro__popup_opened');
    }

    _closePopup() {
        this._popup.classList.remove('pomodoro__popup_opened');
    }

    setEventListeners() {
        this._startBtn.addEventListener('click', () => {
            this._startTimer();
        });

        this._resetBtn.addEventListener('click', () => {
            this._resetTimer();
        });

        this._popupBtn.addEventListener('click', () => {
            this._openPopup();
        });

        this._setBtn.addEventListener('click', () => {
            this._setNewTime();
            this._closePopup();
        });

    }
}