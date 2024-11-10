let focusTime = 25 * 60;
let breakTime = 5 * 60;
let timeLeft = focusTime;
let isFocus = true;
let timer;

const timerDisplay = document.getElementById("timer");
const focusInput = document.getElementById("focus-time");
const breakInput = document.getElementById("break-time");
const notificationSound = document.getElementById("notification-sound");

function updateDisplay() {
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;
    timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
}

function startTimer() {
    clearInterval(timer);
    timeLeft = isFocus ? focusTime : breakTime;
    timer = setInterval(() => {
        timeLeft--;
        updateDisplay();

        if (timeLeft <= 0) {
            notificationSound.play();
            isFocus = !isFocus;
            timeLeft = isFocus ? focusTime : breakTime;
        }
    }, 1000);
}

function resetTimer() {
    clearInterval(timer);
    isFocus = true;
    focusTime = parseInt(focusInput.value) * 60;
    breakTime = parseInt(breakInput.value) * 60;
    timeLeft = focusTime;
    updateDisplay();
}

updateDisplay();
