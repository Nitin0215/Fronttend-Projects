let win = 0;
let lose = 0;
let tie = 0;
let isAutoPlay = false;
let id;

const winDisplay = document.getElementById('win');
const loseDisplay = document.getElementById('lose');
const tieDisplay = document.getElementById('tie');
const button = document.getElementById('autoplay');
const display = document.getElementById('display');
const result = document.getElementById('result');

function userInput(value) {
  const sysInput = systemInput();
  console.log(value, sysInput);
  win = win.toString().padStart(3,0);
  lose = lose.toString().padStart(3,0);
  tie = tie.toString().padStart(3,0);
  winDisplay.innerHTML = `win : ${win}`;
  loseDisplay.innerHTML = `lose : ${lose}`;
  tieDisplay.innerHTML = `tie : ${tie}`;
  console.log("win:", win, "lose:", lose, "tie:", tie);
  play(value, sysInput);
  display.innerHTML= `USER : ${value} <span>VS</span> SYSTEM: ${sysInput}`;
}

function systemInput() {
  let systemInput = Math.round(Math.random() * 2);
  if (systemInput === 0) {
    return "rock";
  } else if (systemInput === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function play(userIn, systemIn) {
  let r = ''
  if (userIn == "rock") {
    if (systemIn == "rock") {
      tie++;
      r = "tie";
      console.log("tie");
    } else if (systemIn == "paper") {
      lose++;
      r = "lose";
      console.log("lose");
    } else {
      win++;
      r = "win";
      console.log("win");
    }
  } else if (userIn == "paper") {
    if (systemIn == "rock") {
      win++;
      r = "win";
      console.log("win");
    } else if (systemIn == "paper") {
      tie++;
      r = "tie";
      console.log("tie");
    } else {
      lose++;
      r = "lose";
      console.log("lose");
    }
  } else {
    if (userIn == "scissors") {
      if (systemIn == "paper") {
        win++;
        r = "win";
        console.log("win");
      } else if (systemIn == "rock") {
        lose++;
        r = "lose";
        console.log("lose");
      } else {
        tie++;
        r = "tie";
        console.log("tie");
      }
    }
  }
  result.innerHTML = `${r}`;
}

function reset() {
    win = 0;
    lose = 0;
    tie = 0;
    winDisplay.innerHTML = `win : ${win}`;
    loseDisplay.innerHTML = `lose : ${lose}`;
    tieDisplay.innerHTML = `tie : ${tie}`;
    console.log("win:", win, "lose:", lose, "tie:", tie);
}



function autoplay() {
    if(!isAutoPlay) {
        button.innerHTML = "⏸️";
        button.className = "Activated";
        isAutoPlay = true;
        id = setInterval(() => {
            const userIn = systemInput();
            console.log(userIn);
            userInput(userIn);
        }, 100)
    }
    else {
        button.innerHTML = "▶️";
        clearInterval(id);
        isAutoPlay = false;
        button.className = "Deactivated";
    }
}
