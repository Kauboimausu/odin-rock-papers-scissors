
let computerScore = 0, humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let options = ["rock", "paper", "scissors"];
    return options[choice];
}

function getHumanChoice() {
    let choice = prompt("Choose rock, paper or scissors");
    return choice.toLowerCase();
}


function playRound(computerChoice, humanChoice) {

    switch (computerChoice) {
        case "rock":

            switch (humanChoice) {
                case "rock":
                    console.log("Tie, you both picked " + humanChoice);
                    break;

                case "paper":
                    console.log("You won! " + humanChoice + " beats " + computerChoice);
                    humanScore++;
                    break;

                case "scissors":
                    console.log("Computer won! " + computerChoice + " beats " + humanChoice);
                    computerScore++;
                    break;
            }   
                
            break;
        
        case "paper":

            switch (humanChoice) {
                case "rock":
                    console.log("Computer won! " + computerChoice + " beats " + humanChoice);
                    computerScore++;
                    break;

                case "paper":
                    console.log("Tie, you both picked " + humanChoice);
                    break;

                case "scissors":
                    console.log("You won! " + humanChoice + " beats " + computerChoice);
                    humanScore++;
                    break;
            }   

            break;
        case "scissors":

            switch (humanChoice) {
                case "rock":
                    console.log("You won! " + humanChoice + " beats " + computerChoice);
                    humanScore++;
                    break;

                case "paper":
                    console.log("Computer won! " + computerChoice + " beats " + humanChoice);
                    computerScore++;
                    break;

                case "scissors":
                    console.log("Tie, you both picked " + humanChoice);
                    break;
            }   

            break;
    
        default:
            break;
    }
}

for (let i = 0; i < 5; i++) {

    let computerChoice = getComputerChoice();
    let humanChoice = getHumanChoice();

    playRound(computerChoice, humanChoice);


    console.log("Player Score: " + humanScore);
    console.log("Computer Score: " + computerScore);
    
    
}