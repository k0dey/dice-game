
const diceRoll = document.getElementById('rollDice');
const diceBox = document.getElementById('diceBox');
const page = document.getElementById('wrapper');
diceRoll.onclick = rollDice;
let currentRoll = 0;
let rollTotal = 0;
let maxTotal = 21;


function rollDice () {
    page.classList.add("spin");
    setTimeout(function () {
        page.classList.remove("spin");
   },600);

    currentRoll = randomNum();
    rollTotal += currentRoll;


    if (currentRoll == 1) {
        diceBox.innerHTML = `<img src="./img/dice1.png"><br>1! You lose! Click roll to play again!<br><br>current: <b>1</b><br>final total: <b>${rollTotal}</b>`;
        rollTotal = 0;
    } else if (rollTotal >= 20) {
        diceBox.innerHTML = `<img src="./img/dice${currentRoll}.png"><br>Winner! Click roll to play again!<br><br>current: <b>${currentRoll}</b><br>final total: <b>${rollTotal}</b>`;
        rollTotal = 0;
        } else {
            diceBox.innerHTML = `<img src="./img/dice${currentRoll}.png"><br>Keep going!<br><br>current: <b>${currentRoll}</b><br>current total: <b>${rollTotal}</b>`;
    }

}

function randomNum () {
    return Math.floor((Math.random() * 6) + 1);
}