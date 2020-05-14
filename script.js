
const diceRoll = document.getElementById('rollDice');
const diceRollTwo = document.getElementById('rollDiceTwo')
const diceBox = document.getElementById('diceBox');
const diceBoxTwo = document.getElementById('diceBoxTwo');
const page = document.getElementById('wrapper');
const pageTwo = document.getElementById('wrapperTwo');

const players = document.getElementById('players');
players.onclick = selectMode;
let onePlayer = true;

diceRoll.onclick = rollDice;
diceRollTwo.onclick = rollDiceTwo;

function selectMode () {
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


function randomNum () {
    return Math.floor((Math.random() * 6) + 1);
}

function rollDice () {
    page.classList.add("spin");
    setTimeout(function () {
        page.classList.remove("spin");
   },600);

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


function rollDiceTwo () {
    pageTwo.classList.add("spin");
    setTimeout(function () {
        pageTwo.classList.remove("spin");
   },600);

    currentRoll = randomNum();
    rollTotal += currentRoll;


    if (currentRoll == 1) {
        diceBoxTwo.innerHTML = `<img src="./img/dice1.png"><br><b>1! You lose! Click roll to play again!</b><br><br>current: <b>1</b><br>final total: <b>${rollTotal}</b>`;
        rollTotal = 0;
    } else if (rollTotal >= 20) {
        diceBoxTwo.innerHTML = `<img src="./img/dice${currentRoll}.png"><br><b>Winner! Click roll to play again!</b><br><br>current: <b>${currentRoll}</b><br>final total: <b>${rollTotal}</b>`;
        rollTotal = 0;
        } else {
            diceBoxTwo.innerHTML = `<img src="./img/dice${currentRoll}.png"><br><b>Keep going!</b><br><br>current: <b>${currentRoll}</b><br>current total: <b>${rollTotal}</b>`;
    }

}