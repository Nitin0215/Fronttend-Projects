let player1 = "Player1";
let player2 = "Player2";

function editNames() {
  player1 = prompt("Change Player1 Name");
  player2 = prompt("Change Player2 Name");

  if (!isvalidated(player1) || !isvalidated(player2)) {
    alert("please enter valid name");
    return;
  }
  document.querySelector("p.Player1").innerHTML = player1;

  document.querySelector("p.Player2").innerHTML = player2;
}

function isvalidated(name){
  return /^[a-zA-Z]+$/.test(name);
}

function rollTheDice() {
  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");

  diceNum1.setAttribute("src", "/dice_game/assets/images/diceroll.gif");
  diceNum2.setAttribute("src", "/dice_game/assets/images/diceroll.gif");

  let result = document.querySelector("h1");
  result.innerHTML = "";
  setTimeout(() => {
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    diceNum1.setAttribute("src", `/dice_game/assets/images/dice${randomNumber1}.png`);
    diceNum2.setAttribute("src", `/dice_game/assets/images/dice${randomNumber2}.png`);

    //determine the winner
    if (randomNumber1 === randomNumber2) {
      result.innerHTML = "Draw!";
    } else if (randomNumber1 < randomNumber2) {
      result.innerHTML = player2 + " WINS!";
    } else {
      result.innerHTML = player1 + " WINS!";
    }
  }, 2500);
}

function reset() {
  // Reset player names to defaults
  player1 = "Player1";
  player2 = "Player2";

  document.querySelector("p.Player1").innerHTML = player1;
  document.querySelector("p.Player2").innerHTML = player2;

  let diceNum1 = document.querySelector(".img1");
  let diceNum2 = document.querySelector(".img2");
  diceNum1.setAttribute("src", "/dice_game/assets/images/dice6.png");
  diceNum2.setAttribute("src", "/dice_game/assets/images/dice6.png");

  document.querySelector("h1").innerHTML = "Let's Play!";
}
