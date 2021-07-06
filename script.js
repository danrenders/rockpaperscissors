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
    let textArray = ['rock','paper','scissors'];
    return textArray[Math.floor(Math.random()*textArray.length)];
}


function playRound (playerSelection, computerSelection) {
    if (playerSelection === "paper" && computerSelection === "rock") {

        playerScore++; 
        return "You win! Computer chose " + computerSelection + ", and paper covers rock. Player's score: " + playerScore + " Computer's score: " + computerScore;

    } else if (playerSelection === "paper" && computerSelection === "scissors") {

        computerScore++;
        return "You Lose. Computer chose " + computerSelection + ", and scissors cuts paper. Player's score: " + playerScore + " Computer's score: " + computerScore;

    } else if (playerSelection === "rock" && computerSelection === "scissors") {

        playerScore++; 
        return "You win! Computer chose " + computerSelection + ", and rock smashes scissors. Player's score: " + playerScore + " Computer's score: " + computerScore;

    } else if (playerSelection === "rock" && computerSelection === "paper")  {

        computerScore++;
        return "You lose. Computer chose " + computerSelection + ", and paper covers rock. Player's score: " + playerScore + " Computer's score: " + computerScore;

    } else if (playerSelection === "scissors" && computerSelection === "paper") {

        playerScore++; 
        return "You win! Computer chose " + computerSelection + ", and scissors cuts paper. Player's score: " + playerScore + " Computer's score: " + computerScore;

    } else if (playerSelection === "scissors" && computerSelection === "rock") {

        computerScore++;
        return "You lose. Computer chose " + computerSelection + ", and rock smashes scissors Player's score: " + playerScore + " Computer's score: " + computerScore;

    } else if (playerSelection === computerSelection) {

        
        return "Computer chose " + computerSelection + ", Therefore it's a Tie. Player's score: " + playerScore + " Computer's score: " + computerScore;

    } else {

        return "Invalid Choice";

    }
};


while (playerScore < 5 && computerScore < 5) {
    computerSelection = computerPlay().toLowerCase();
    playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
    playRound(playerSelection.toLowerCase(), computerSelection.toLowerCase());
    console.log(playRound(playerSelection, computerSelection));
}

function game(playerScore, computerScore) {
    if (playerScore === 5) {
        return "Congrats, you win!";
    } else if (computerScore === 5 ) {
        return "You lose, try again.";
    } 
};

