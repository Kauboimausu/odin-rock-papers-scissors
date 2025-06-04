
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
                // We need to check if someone has already won, if so it can't be played anymore
                if (computerScore >= 5 || humanScore >= 5){
                    let warningText = document.createElement("li");

                    let winner = "";
                    if (humanScore == 5)
                        winner = "Player";
                    else
                        winner = "Computer";

                    warningText.textContent = winner + " has already won the game";
                    history.appendChild(warningText);

                    return
                }
                
                let computerChoice = getComputerChoice();

                let roundText = playRound(computerChoice, choice.value);

                score.textContent = "Player: " + humanScore + " - " + computerScore + ": Computer";

                let roundHistory = document.createElement("li");
                roundHistory.textContent = roundText;
                history.appendChild(roundHistory);

                // Winner declaring text
                if (computerScore >= 5 || humanScore >= 5){

                    let declareWinner = document.createElement("li");
                    let winner = "";

                    if (humanScore == 5){
                        winner = "Player";
                        score.style.backgroundColor = "green";
                    }
                    else{
                        winner = "Computer";
                        score.style.backgroundColor = "red";
                    }
                        

                    declareWinner.textContent = winner + " has won the match!"
                    history.appendChild(declareWinner);
                }

                
                
        });
});
