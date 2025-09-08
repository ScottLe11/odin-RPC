var humanScore = 0;
var compScore = 0;

//console.log("Hello World");

//randomize computer choice between RPS
function getComputerChoice(){
    var random = Math.random();
    if (random >= .66){
        return "rock";
    }
    else if (random >= .33){
        return "paper";
    }
    else{
        return "scissors";
    }
}

//console.log(getComputerChoice());

function getHumanChoice(){
    var choice = prompt("Choose rock, paper, or scissors");
    return choice;
    
}


console.log(getHumanChoice());