let humanScore = 0;
let computerScore = 0;


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
        div.textContent = "Tied";
        console.log("Tied!");
    }

    else if ((human == "rock" && computer == "scissors") ||
        (human == "paper" && computer == "rock") ||
        (human == "scissors" && computer == "paper")
        ){
        div.textContent = "You win. " + human + " beats " + computer;
        console.log("You win. " + human + " beats " + computer); 
        ++humanScore;
        displayPlayerScore.textContent = humanScore;
        
    }

    else{
        div.textContent = "You lose. " + computer + " beats " + human;
        console.log("You lose. " + computer + " beats " + human);
        ++computerScore;
        displayCompScore.textContent = computerScore;
        
    }

    if (humanScore == 5){
        div.textContent = "Player Wins RPS. Congrats";
        humanScore = 0;
        computerScore = 0;
        displayPlayerScore.textContent = humanScore;
        displayCompScore.textContent = computerScore;
    }
    else if (computerScore == 5){
        div.textContent = "Computer Wins RPS. Better luck next time";
        humanScore = 0;
        computerScore = 0;
        displayPlayerScore.textContent = humanScore;
        displayCompScore.textContent = computerScore;
    }
    
}

const buttons = document.querySelectorAll("button");
const div = document.querySelector("#result");
const displayPlayerScore = document.querySelector("#player");
const displayCompScore = document.querySelector("#comp");
buttons.forEach((button) => {
    button.addEventListener("click", (e) =>{
        const playerChoice = e.target.id;
        playRound(playerChoice, getComputerChoice());
    });
});