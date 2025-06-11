let stopwatchInterval;
let stopwatchTime = 0;
let isRunning = false;

const stopwatchDisplay = document.getElementById('stopwatch');
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const resetButton = document.getElementById('reset');

function formatTime(ms) {
    const hours = Math.floor(ms / 3600000);
    const minutes = Math.floor((ms % 3600000) / 60000);
    const seconds = Math.floor((ms % 60000) / 1000);
    const milliseconds = Math.floor(ms % 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
}

function updateStopwatch() {
    stopwatchTime += 10; // Update every 10ms for smoother millisecond display
    stopwatchDisplay.textContent = formatTime(stopwatchTime);
}

function startStopwatch() {
    if (!isRunning) {
        isRunning = true;
        stopwatchInterval = setInterval(updateStopwatch, 10); // Update every 10ms
        startButton.disabled = true;
        stopButton.disabled = false;
    }
}

function stopStopwatch() {
    if (isRunning) {
        isRunning = false;
        clearInterval(stopwatchInterval);
        startButton.disabled = false;
        stopButton.disabled = true;
    }
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTime = 0;
    stopwatchDisplay.textContent = formatTime(stopwatchTime);
}

startButton.addEventListener('click', startStopwatch);
stopButton.addEventListener('click', stopStopwatch);
resetButton.addEventListener('click', resetStopwatch);

function updateClock() {
    fetch('/time')
        .then(response => response.json())
        .then(data => {
            document.getElementById('clock').textContent = data.time;
        })
        .catch(error => console.error('Error fetching time:', error));
}

setInterval(updateClock, 100); // Update clock every 100ms for millisecond precision
updateClock();