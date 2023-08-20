const timeDisplay = document.querySelector('.time-display');
const startBtn = document.querySelector('.start-btn');
const pauseBtn = document.querySelector('.pause-btn');
const resetBtn = document.querySelector('.reset-btn');
const lapBtn = document.querySelector('.lap-btn');
const lapTimesList = document.querySelector('.lap-times');

let startTime = 0;
let elapsedTime = 0;
let timerInterval;

function formatTime(ms) {
  const date = new Date(ms);
  return date.toISOString().substr(11, 8);
}

function updateDisplay() {
  timeDisplay.textContent = formatTime(elapsedTime);
}

function startTimer() {
  startTime = Date.now() - elapsedTime;
  timerInterval = setInterval(() => {
    elapsedTime = Date.now() - startTime;
    updateDisplay();
  }, 10);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  elapsedTime = 0;
  updateDisplay();
  lapTimesList.innerHTML = '';
}

function addLapTime() {
  const lapTime = document.createElement('li');
  lapTime.textContent = formatTime(elapsedTime);
  lapTimesList.appendChild(lapTime);
}

startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
lapBtn.addEventListener('click', addLapTime);
