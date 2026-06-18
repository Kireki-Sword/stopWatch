const timer = document.getElementById('timer');

let timerFull = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerFull = setInterval(update, 10);
        isRunning = true;
    }
}

function Bstop() {
    if (isRunning) {
        clearInterval(timerFull);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
        window.alert(`Elapsed time: ${timer.textContent}`);
    }
}

function reset() {
    clearInterval(timerFull);
    timerFull = null;
    startTime = 0;
    elapsedTime = 0;
    isRunning = false;
    timer.textContent = '00:00:00:00';
    window.alert('Stopwatch has been reset.');
}

function update() {
    elapsedTime = Date.now() - startTime;

    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    const seconds = Math.floor((elapsedTime / 1000) % 60);
    const milliseconds = Math.floor(elapsedTime % 1000 / 10);

    timer.textContent =
        `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(milliseconds)}`;
}
function pad(number) {
    return String(number).padStart(2, '0');
}