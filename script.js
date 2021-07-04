//Rock, Paper, Scissors
//Create a function that randomly generates "Rock, Paper or Scissors" called computerSelection
//Create a selection for the player to choose "Rock, Paper or Scissors" -- this will be playerSelection -- make sure it's not case sensitive
//Create a function for a round to evaluate results
// Paper covers Rock
// Rock beats scissors
// Scissors cuts paper 
// Return the result of the game
// Each time the player wins, add 1 point to their score.
// Each time the computer wins, add 1 point to their score.
// Create a function that plays the game over and over until one player hits 5 points
// return "Congrats, you Win", or "You lost. Try again."



function computerPlay() {
    let textArray = ['Rock','Paper','Scissors'];
    return textArray[Math.floor(Math.random()*textArray.length)];
}

let i = 
function game() {
    for (i = 0; i <= 5; i++) {
  
    }
}

function playRound (playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Computer chose " + computerSelection + ", and Paper covers rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You Lose. Computer chose " + computerSelection + ", and Scissors cuts paper.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Computer chose " + computerSelection + ", and Rock smashes scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper")  {
        return "You lose. Computer chose " + computerSelection + ", and Paper covers rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Computer chose " + computerSelection + ", and Scissors cuts paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose. Computer chose " + computerSelection + ", and Rock smashes scissors";
    } else if (playerSelection == computerSelection) {
        return "Computer chose " + computerSelection + ", Therefore it's a Tie.";
    } else {
        return "Invalid Choice";
    }
};

let computerScore = 0;
let playerScore = 0;
let playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
let computerSelection = computerPlay().toLowerCase();
console.log(playRound(playerSelection, computerSelection));

/* function playRound (playerSelection, computerSelection) {
    if (playerSelection == "paper" && computerSelection == "rock") {
        alert ("You win! Computer chose " + computerSelection + ", and Paper covers rock.");
        return "You win! Computer chose " + computerSelection + ", and Paper covers rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert ("You Lose. Computer chose " + computerSelection + ", and Scissors cuts paper.");
        return "You Lose. Computer chose " + computerSelection + ", and Scissors cuts paper.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert ("You win! Computer chose " + computerSelection + ", and Rock smashes scissors.");
        return "You win! Computer chose " + computerSelection + ", and Rock smashes scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper")  {
        alert("You lose. Computer chose " + computerSelection + ", and Paper covers rock");
        return "You lose. Computer chose " + computerSelection + ", and Paper covers rock";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert ("You win! Computer chose " + computerSelection + ", and Scissors cuts paper.");
        return "You win! Computer chose " + computerSelection + ", and Scissors cuts paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert ("You lose. Computer chose " + computerSelection + ", and Rock smashes scissors");
        return "You lose. Computer chose " + computerSelection + ", and Rock smashes scissors";
    } else if (playerSelection == computerSelection) {
        alert ("Computer chose " + computerSelection + ", Therefore it's a Tie.");
        return "Computer chose " + computerSelection + ", Therefore it's a Tie.";
    } else {
        alert ("Invalid Choice");
        return "Invalid Choice";
    }
};
*/