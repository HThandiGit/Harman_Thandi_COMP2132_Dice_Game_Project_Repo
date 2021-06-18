class Dice{

    constructor(firstDieValue, secondDieValue){

        this.firstDieValue = firstDieValue;
        this.secondDieValue = secondDieValue;
    }

    rollDice(){

        this.firstDieValue = Math.floor((Math.random() * 6) + 1);
        this.secondDieValue = Math.floor((Math.random() * 6) + 1);
    }

    getFirstDieVal(){

        return this.firstDieValue;
    }

    getSecondDieVal(){

        return this.secondDieValue;
    }

    getDiceSum(){

        return (this.firstDieValue + this.secondDieValue);
    }
}    
