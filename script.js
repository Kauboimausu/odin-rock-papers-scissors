
let computerScore = 0, humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let options = ["Rock", "Paper", "Scissors"];
    return options[choice];
}

function getHumanChoice() {
    let choiceButtons = document.querySelectorAll(".choice");
    choiceButtons.forEach(choice, () => {
        choice.addEventListener("click", () => {
            return choice.value;
        });
    });
}


function playRound(computerChoice, humanChoice) {

    switch (computerChoice) {
        case "Rock":

            switch (humanChoice) {
                case "Rock":
                    return "Tie, you both picked " + humanChoice

                case "Paper":
                    humanScore++;
                    return "You won! " + humanChoice + " beats " + computerChoice;

                case "Scissors":
                    computerScore++;
                    return "Computer won! " + computerChoice + " beats " + humanChoice
            }   
                
            break;
        
        case "Paper":

            switch (humanChoice) {
                case "Rock":
                    console.log("Computer won! " + computerChoice + " beats " + humanChoice);
                    computerScore++;
                    break;

                case "Paper":
                    console.log("Tie, you both picked " + humanChoice);
                    break;

                case "Scissors":
                    console.log("You won! " + humanChoice + " beats " + computerChoice);
                    humanScore++;
                    break;
            }   

            break;
        case "Scissors":

            switch (humanChoice) {
                case "Rock":
                    console.log("You won! " + humanChoice + " beats " + computerChoice);
                    humanScore++;
                    break;

                case "Paper":
                    console.log("Computer won! " + computerChoice + " beats " + humanChoice);
                    computerScore++;
                    break;

                case "Scissors":
                    console.log("Tie, you both picked " + humanChoice);
                    break;
            }   

            break;
    
        default:
            break;
    }
}


function gameLoop() {

    let score = document.querySelector(".scores");
    let history = document.querySelector(".round-history");

    while (humanScore < 6 || computerScore < 6) {
        let computerChoice = getComputerChoice();
        let humanChoice = getHumanChoice();

        playRound()
    }
}
