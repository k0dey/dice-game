
const diceRoll = document.getElementById('rollDice');
const diceBox = document.getElementById('diceBox');

diceRoll.onclick = rollDice;

let currentRoll = 0;
let rollTotal = 0;
let maxTotal = 21;


function rollDice () {
    currentRoll = randomNum();
    rollTotal += currentRoll;
    if (currentRoll == 1) {
        diceBox.innerHTML = `1! You lose!\ncurrent: ${currentRoll} - total: ${rollTotal}`;
    }
    else if (rollTotal >= 20) {
        diceBox.innerHTML = `You win!\ncurrent: ${currentRoll} - total: ${rollTotal}`;
        rollTotal = 0;
        } else {
            currentRoll = randomNum();
            diceBox.innerHTML = `Keep going!\ncurrent: ${currentRoll} - total: ${rollTotal}`;
    }




}


function randomNum () {
    return Math.ceil((Math.random() * 6) + 1);
}