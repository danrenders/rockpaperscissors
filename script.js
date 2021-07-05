//Rock, Paper, Scissors
//Create a function that randomly generates "Rock, Paper or Scissors" called computerSelection
//Create a selection for the player to input "Rock, Paper or Scissors" -- this will be playerSelection -- make sure it's not case sensitive
//Create a function for a round to evaluate results
// Return the result of the round
// When the player wins, add 1 point to playerScore.
// When the computer wins, add 1 point to computerScore.
// Repeat playerSelection prompt and playRound
// Repeat until playerScore or computerScore <= 5. 
// return "Congrats, you Win", or "You lost. Try again."


let computerScore = 0;
let playerScore = 0;
let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
let computerSelection = computerPlay().toLowerCase();
console.log(playRound(playerSelection, computerSelection));

function computerPlay() {
    let textArray = ['Rock','Paper','Scissors'];
    return textArray[Math.floor(Math.random()*textArray.length)];
}


function playRound (playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock") {
        playerScore = playerScore + 1; 
        return "You win! Computer chose " + computerSelection + ", and Paper covers rock. Player's score: " + playerScore + " Computer's score: " + computerScore;
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore = computerScore + 1;
        return "You Lose. Computer chose " + computerSelection + ", and Scissors cuts paper. Player's score: " + playerScore + " Computer's score: " + computerScore;
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        playerScore = playerScore + 1; 
        return "You win! Computer chose " + computerSelection + ", and Rock smashes scissors. Player's score: " + playerScore + " Computer's score: " + computerScore;
    } else if (playerSelection == "rock" && computerSelection == "paper")  {
        computerScore = computerScore + 1;
        return "You lose. Computer chose " + computerSelection + ", and Paper covers rock. Player's score: " + playerScore + " Computer's score: " + computerScore;
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore = playerScore + 1; 
        return "You win! Computer chose " + computerSelection + ", and Scissors cuts paper. Player's score: " + playerScore + " Computer's score: " + computerScore;
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore = computerScore + 1;
        return "You lose. Computer chose " + computerSelection + ", and Rock smashes scissors Player's score: " + playerScore + " Computer's score: " + computerScore;
    } else if (playerSelection == computerSelection) {
        return "Computer chose " + computerSelection + ", Therefore it's a Tie. Player's score: " + playerScore + " Computer's score: " + computerScore;
    } else {
        return "Invalid Choice";
    }
};

while (playerScore < 5 || computerScore < 5) {
    playerSelection = prompt("Rock, Paper or Scissors?");
    playRound(playerSelection, computerSelection);
}

function game() {

};

