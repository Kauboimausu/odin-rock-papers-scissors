
let computerScore = 0, humanScore = 0;

function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    let options = ["Rock", "Paper", "Scissors"];
    return options[choice];
}


function playRound(computerChoice, humanChoice) {

    switch (computerChoice) {
        case "Rock":

            switch (humanChoice) {
                case "Rock":
                    return "Tie, you both picked " + humanChoice;

                case "Paper":
                    humanScore++;
                    return "You won! " + humanChoice + " beats " + computerChoice;

                case "Scissors":
                    computerScore++;
                    return "Computer won! " + computerChoice + " beats " + humanChoice;
            }   
                
            break;
        
        case "Paper":

            switch (humanChoice) {
                case "Rock":
                    computerScore++;
                    return "Computer won! " + computerChoice + " beats " + humanChoice;

                case "Paper":
                    return "Tie, you both picked " + humanChoice;

                case "Scissors":
                    humanScore++;
                    return "You won! " + humanChoice + " beats " + computerChoice;
            }   

            break;
        case "Scissors":

            switch (humanChoice) {
                case "Rock":
                    humanScore++;
                    return "You won! " + humanChoice + " beats " + computerChoice;

                case "Paper":
                    computerScore++;
                    return "Computer won! " + computerChoice + " beats " + humanChoice;

                case "Scissors":
                    return "Tie, you both picked " + humanChoice;
            }   

            break;
    }
}


let score = document.querySelector(".scores");
let history = document.querySelector(".round-history");

const choiceButtons = document.querySelectorAll(".choice");
    choiceButtons.forEach(choice => {
            choice.addEventListener("click", () => {
                let computerChoice = getComputerChoice();

                let roundText = playRound(computerChoice, choice.value);

                score.textContent = "Player: " + humanScore + " - " + computerScore + ": Computer";

                let roundHistory = document.createElement("li");
                roundHistory.textContent = roundText;
                history.appendChild(roundHistory);
        });
});
