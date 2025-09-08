
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


//console.log(getHumanChoice());

function playRound(humanChoice, computerChoice){
    var human = humanChoice.toLowerCase();
    var computer = computerChoice.toLowerCase();

    if (human == computer){
        console.log("Tied!");
    }

    else if ((human == "rock" && computer == "scissors") ||
        (human == "paper" && computer == "rock") ||
        (human == "scissors" && computer == "paper")
        ){
        console.log("You win. " + human + " beats " + computer); 
        //++humanScore;
        return "human";
    }

    else{
        console.log("You lose. " + computer + " beats " + human);
        return "computer";
    }
    
}

function playGame(){
    var humanScore = 0;
    var computerScore = 0;

    for (let i = 0; i < 5; ++i){
        var humanSelection = getHumanChoice();
        var computerSelection = getComputerChoice();
        var winner = playRound(humanSelection, computerSelection);
        if (winner == "human"){
            ++humanScore;
        }
        else{
            ++computerScore;
        }
    }
    if (humanScore > computerScore){
        console.log("You win the entire game. Congrats!!");
    }
    else if (computerScore > humanScore){
        console.log("Computer wins the game. Better luck next time");
    }
    else{
        console.log("Total tie from both sides.");
    }


}

playGame();

// var humanSelection = getHumanChoice();
// var computerSelection = getComputerChoice();
// playRound(humanSelection, computerSelection);