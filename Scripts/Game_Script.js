const rollButton = document.getElementById("roll-button");
const resetButton = document.getElementById("reset-button");
const scoreTracking = document.getElementById("score-tracking");

const playerDice = new Dice(1, 2);
const cpuDice = new Dice(3, 4);

const dieOne = document.getElementById("die_one");
const dieTwo = document.getElementById("die_two");
const dieThree = document.getElementById("die_three");
const dieFour = document.getElementById("die_four");

let rollCount = 3;
let playerScore = 0;
let cpuScore = 0;
let totalPlayerScore = 0;
let totalCPUScore = 0;
let totalScore = 0;

rollButton.addEventListener("click", diceRoll);

function diceRoll( event ){

    event.preventDefault();

    if(rollCount > 0){
        
        playerDice.rollDice();
        cpuDice.rollDice();

        playerScore = playerDice.calcScore();
        totalPlayerScore += playerScore;
        cpuScore = cpuDice.calcScore();
        totalCPUScore += cpuScore;
        totalScore += playerScore + cpuScore;

        dieOne.src = `Images/dice_face_${playerDice.getFirstDieVal()}.png`;
        dieTwo.src = `Images/dice_face_${playerDice.getSecondDieVal()}.png`;
        dieThree.src = `Images/dice_face_${cpuDice.getFirstDieVal()}.png`;
        dieFour.src = `Images/dice_face_${cpuDice.getSecondDieVal()}.png`;

        scoreTracking.innerHTML = `<b><u>Current Score</u></b><br><br>
        <b>Player score: ${playerScore}</b><br><br><b>Comp score: ${cpuScore}</b><br><br><b>Total Score: ${totalScore}</b>`;

        rollCount--;
    
    }

    if(rollCount == 0){

        resetButton.onclick = function(){

            window.location.reload();
        }

        if(totalPlayerScore > totalCPUScore){
    
            scoreTracking.innerHTML = `<b><u>You won!</u></b><br><br>
            <b>Total Player score: ${totalPlayerScore}</b><br><br><b>Total Comp score: ${totalCPUScore}</b><br><br><b>Total Score: ${totalScore}</b><br><br><b>Press Reset to play again</b>`;

        }else if(totalCPUScore > totalPlayerScore){
    
            scoreTracking.innerHTML = `<b><u>The computer won!</u></b><br><br>
            <b>Total Player score: ${totalPlayerScore}</b><br><br><b>Total Comp score: ${totalCPUScore}</b><br><br><b>Total Score: ${totalScore}</b><br><br><b>Press Reset to play again</b>`;
        }else{
    
            scoreTracking.innerHTML = `<b><u>Its a tie!</u></b><br><br>
            <b>Total Player score: ${totalPlayerScore}</b><br><br><b>Total Comp score: ${totalCPUScore}</b><br><br><b>Total Score: ${totalScore}</b><br><br><b>Press Reset to play again</b>`;
        }
    }
}