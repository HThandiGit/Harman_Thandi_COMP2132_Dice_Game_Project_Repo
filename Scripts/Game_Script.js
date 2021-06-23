// grab html elements

const heading = document.getElementById("heading");
const rollButton = document.getElementById("roll-button");
const resetButton = document.getElementById("reset-button");
const scoreTracking = document.getElementById("score-tracking");

// create 2 sets of dice
// the starting values won't count as a roll or contribute to the score

const playerDice = new Dice(1, 2);
const cpuDice = new Dice(3, 4);

// image containers

const dieOne = document.getElementById("die_one");
const dieTwo = document.getElementById("die_two");
const dieThree = document.getElementById("die_three");
const dieFour = document.getElementById("die_four");

// necessary numbers
let rollCount = 3;
let playerScore = 0;
let cpuScore = 0;
let totalPlayerScore = 0;
let totalCPUScore = 0;
let totalScore = 0;

// heading fade in animation

let headingInterval = setInterval(showHeading, 50);

heading.style.opacity = 0;

opacity = parseFloat(window.getComputedStyle(heading).getPropertyValue("opacity"));

function showHeading(){
    
    if(opacity < 100){

        opacity += 0.1;
        heading.style.opacity = opacity;
    }else{

        clearInterval(headingInterval);
    }
}

// function for rolling dice

rollButton.addEventListener("click", diceRoll);

function diceRoll( event ){

    event.preventDefault();

    if(rollCount > 0){
        
        // roll the dice

        playerDice.rollDice();
        cpuDice.rollDice();

        // tally the scores

        playerScore = playerDice.calcScore();
        totalPlayerScore += playerScore;
        cpuScore = cpuDice.calcScore();
        totalCPUScore += cpuScore;
        totalScore += playerScore + cpuScore;

        // adjust images to match the rolls

        dieOne.src = `Images/dice_face_${playerDice.getFirstDieVal()}.png`;
        dieTwo.src = `Images/dice_face_${playerDice.getSecondDieVal()}.png`;
        dieThree.src = `Images/dice_face_${cpuDice.getFirstDieVal()}.png`;
        dieFour.src = `Images/dice_face_${cpuDice.getSecondDieVal()}.png`;

        // output
        scoreTracking.innerHTML = `<b><u>Current Score</u></b><br><br>
        <b>Player score: ${playerScore}</b><br><br><b>Comp score: ${cpuScore}</b><br><br><b>Total Score: ${totalScore}</b>`;

        rollCount--;
    
    }

    // once we're out of rolls determine a winner and enable the reset button

    if(rollCount == 0){

        resetButton.onclick = function(){

            window.location.reload();
        };

        if(totalPlayerScore > totalCPUScore){
    
            scoreTracking.innerHTML = `<b><u>You won!</u></b><br><br>
            <b>Total Player score: ${totalPlayerScore}
            </b><br><br><b>Total Comp score: ${totalCPUScore}</b><br><br><b>
            Total Score: ${totalScore}</b><br><br>
            <b>Press Reset to play again</b>`;

        }else if(totalCPUScore > totalPlayerScore){
    
            scoreTracking.innerHTML = `<b><u>The computer won!</u></b><br><br>
            <b>Total Player score: ${totalPlayerScore}</b><br><br><b>
            Total Comp score: ${totalCPUScore}</b><br><br><b>
            Total Score: ${totalScore}</b><br><br><b>
            Press Reset to play again</b>`;

        }else{
    
            scoreTracking.innerHTML = `<b><u>Its a tie!</u></b><br><br>
            <b>Total Player score: ${totalPlayerScore}</b><br><br><b>
            Total Comp score: ${totalCPUScore}</b><br><br><b>
            Total Score: ${totalScore}</b><br><br><b>
            Press Reset to play again</b>`;
        }
    }
}