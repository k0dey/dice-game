const diceRoll = document.getElementById("rollDice");
const diceRollTwo = document.getElementById("rollDiceTwo");
const diceBox = document.getElementById("diceBox");
const diceBoxTwo = document.getElementById("diceBoxTwo");
const page = document.getElementById("wrapper");
const pageTwo = document.getElementById("wrapperTwo");
const hold = document.getElementById("holdDice");
const p1score = document.getElementById("p1");
const p2score = document.getElementById("p2");

const players = document.getElementById("players");
players.onclick = selectMode;

let onePlayer = true;

diceRoll.onclick = rollDice;
diceRollTwo.onclick = rollDiceTwo;

function selectMode() {
  if (onePlayer) {
    page.classList.remove("unhide");
    page.classList.add("hide");
    pageTwo.classList.remove("hide");
    pageTwo.classList.add("unhide");
    onePlayer = false;
  } else {
    pageTwo.classList.remove("unhide");
    pageTwo.classList.add("hide");
    page.classList.remove("hide");
    page.classList.add("unhide");
    onePlayer = true;
  }
}

let currentRoll = 0;
let rollTotal = 0;

function randomNum() {
  return Math.floor(Math.random() * 6 + 1);
}


function rollDice() {
  page.classList.add("spin");
  setTimeout(function () {
    page.classList.remove("spin");
  }, 600);

  currentRoll = randomNum();
  rollTotal += currentRoll;

  if (currentRoll == 1) {
    diceBox.innerHTML = `<img src="./img/dice1.png"><br><b>1! You lose! Click roll to play again!</b><br><br>current: <b>1</b><br>final total: <b>${rollTotal}</b>`;
    rollTotal = 0;
  } else if (rollTotal >= 20) {
    diceBox.innerHTML = `<img src="./img/dice${currentRoll}.png"><br><b>Winner! Click roll to play again!</b><br><br>current: <b>${currentRoll}</b><br>final total: <b>${rollTotal}</b>`;
    rollTotal = 0;
  } else {
    diceBox.innerHTML = `<img src="./img/dice${currentRoll}.png"><br><b>Keep going!</b><br><br>current: <b>${currentRoll}</b><br>current total: <b>${rollTotal}</b>`;
  }
}



let playerOne = true;
hold.onclick = () => {
  playerOne = !playerOne;
};

let playerOneScore = 0;
let playerTwoScore = 0;

function rollDiceTwo() {
  //     pageTwo.classList.add("spin");
  //     setTimeout(function () {
  //         pageTwo.classList.remove("spin");
  //    },600);
  currentRoll = randomNum();


  if (currentRoll == 1 && playerOne) {
    console.log(`p1 lose`);
    playerOneScore += currentRoll;
    p1score.innerHTML = `<p><b>PLAYER 1</b><br>score: ${playerOneScore}</p>`
    p2score.innerHTML = `<p><b>PLAYER 2</b><br>score: ${playerTwoScore}</p>`

    playerOneScore = 0;
    playerTwoScore = 0;
  } else if (playerOneScore + currentRoll >= 20) {
    p1score.innerHTML = `<p><b>PLAYER 1</b><br>score: ${playerOneScore + currentRoll}</p>`
    p2score.innerHTML = `<p><b>PLAYER 2</b><br>score: ${playerTwoScore}</p>`
    console.log(`p1 win`);
    playerOneScore = 0;
    playerTwoScore = 0;
  } else if (playerOne) {
    console.log(`p1 roll`);
    playerOneScore += currentRoll;
    p1score.innerHTML = `<p><b>PLAYER 1</b><br>score: ${playerOneScore}</p>`
    p2score.innerHTML = `<p><b>PLAYER 2</b><br>score: ${playerTwoScore}</p>`
  } else if (currentRoll == 1 && !playerOne) {
    console.log(`p2 lose`);
    playerTwoScore += currentRoll;
    p1score.innerHTML = `<p><b>PLAYER 1</b><br>score: ${playerOneScore}</p>`
    p2score.innerHTML = `<p><b>PLAYER 2</b><br>score: ${playerTwoScore}</p>`
    playerOneScore = 0;
    playerTwoScore = 0;
  } else if (playerTwoScore + currentRoll >= 20) {
    console.log(`p2 win`);
    playerTwoScore += currentRoll;
    p1score.innerHTML = `<p><b>PLAYER 1</b><br>score: ${playerOneScore + currentRoll}</p>`
    p2score.innerHTML = `<p><b>PLAYER 2</b><br>score: ${playerTwoScore}</p>`
    playerOneScore = 0;
    playerTwoScore = 0;
  } else if (!playerOne){
    console.log(`p2 roll`);
    playerTwoScore += currentRoll;
    p1score.innerHTML = `<p><b>PLAYER 1</b><br>score: ${playerOneScore}</p>`
    p2score.innerHTML = `<p><b>PLAYER 2</b><br>score: ${playerTwoScore}</p>`

  } else {
    alert(`error`)
  }
}
