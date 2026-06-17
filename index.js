const timer = document.getElementById('timer');
let timerFUll = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
    
    if (!isRunning) {
        startTime = Date.now() - elapsedTime;
        timerFUll = setInterval(update,10)
        isRunning = true;
    }

}
function stop() {
    if (isRunning) {
        clearInterval(timerFUll);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
}
function reset() {
    clearInterval(timerFUll);
    timer.textContent = '00:00:00.000';
    elapsedTime = 0;
    isRunning = false;
}
function update() {
    elapsedTime = Date.now() - startTime;
    const hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    const minutes = Math.floor((elapsedTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((elapsedTime % (1000 * 60)) / 1000);
    const milliseconds = elapsedTime % 1000;

    timer.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}.${pad(milliseconds,3)}`;
}