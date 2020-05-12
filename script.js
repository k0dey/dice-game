
const diceRoll = document.getElementById('rollDice');

diceRoll.onclick = rollDice;

let currentRoll = 0;
let rollTotal = 0;
let maxTotal = 21;


function rollDice () {
    if (currentRoll == 1) {
        alert(`1 - You lose!`);
    }
    else if (rollTotal < 20) {
        currentRoll = randomNum();
    rollTotal += currentRoll;
    alert(`${rollTotal}, keep going!`)
    } else {
        alert(`${rollTotal} - You win!`)
    }
}


function randomNum () {
    return Math.ceil((Math.random() * 6) + 1);
}