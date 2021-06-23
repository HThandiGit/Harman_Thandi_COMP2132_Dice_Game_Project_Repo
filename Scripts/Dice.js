// the dice class

class Dice{

    // a pair of 6 sided dice will have 2 values per roll

    constructor(firstDieValue, secondDieValue){

        this.firstDieValue = firstDieValue;
        this.secondDieValue = secondDieValue;
    }

    // random value between 1 and 6 per die

    rollDice(){

        this.firstDieValue = Math.floor((Math.random() * 6) + 1);
        this.secondDieValue = Math.floor((Math.random() * 6) + 1);
    }

    // get the first die value

    getFirstDieVal(){

        return this.firstDieValue;
    }

    // get the second die value

    getSecondDieVal(){

        return this.secondDieValue;
    }

    // get the sum of th dice

    getDiceSum(){

        return (this.firstDieValue + this.secondDieValue);
    }

    // record the score according to the given criteria

    calcScore(){

        if(this.getFirstDieVal() == 1 || this.getSecondDieVal() == 1){

            return 0;

        }else if(this.getFirstDieVal() == this.getSecondDieVal()){

            return (this.getFirstDieVal() + this.getSecondDieVal()) * 2;

        }else{

            return this.getDiceSum();
        }
    }
}    
