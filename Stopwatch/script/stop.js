const span = document.getElementsByTagName('span');


let millisec = 0;
let sec = 0;
let min = 0;
let hour = 0;
let id

function startTimer() {
    id = setInterval(() => {
        console.log(millisec,sec,min,hour);
        millisec += 1;
        if (millisec === 1000) {
            millisec = 0;
            sec++;
        }
        if (sec == 60) {
            sec = 0;
            min++;
        }
        if (min == 60) {
            min = 0;
            hour++;
        }
        if (hour == 24) {
            hour = 0;
        }
        span[0].textContent = hour.toString().padStart(2, 0);
        span[1].textContent = min.toString().padEnd(2, 0);
        span[2].textContent = sec.toString().padEnd(2, 0);
        span[3].textContent = millisec.toString().padStart(4, 0);
    }, 
    1);
}


function stopTimer() {
    clearInterval(id);
}

function resetTimer() {
    clearInterval(id);
    millisec = 0;
    sec = 0;
    min = 0;
    hour = 0;
    span[0].textContent = hour.toString().padStart(2, 0);
    span[1].textContent = min.toString().padEnd(2, 0);
    span[2].textContent = sec.toString().padEnd(2, 0);
    span[3].textContent = millisec.toString().padStart(4, 0);
}
