const rollButton = document.getElementById("roll-button");
const resetButton = document.getElementById("reset-button");

const playerDice = new Dice(1, 2);
const cpuDice = new Dice(3, 4);

let rollCount = 3;
let playerScore = 0;
let cpuScore = 0;
let totalScore = 0;


rollButton.click(diceRoll);

function diceRoll(event){

    while(rollCount > 0){


    }
}