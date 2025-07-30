// =======================
// Rock Paper Scissors Game
// Second Assignment
// =======================

// Step 1: Function that returns a random choice for the computer
function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Step 2: Function that plays one round
function playRound(playerSelection, computerSelection) {
    // Convert player input to lowercase for comparison
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return `You Win! ${playerSelection} beats ${computerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }
}

// Step 3: Function to play 5 rounds
function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Enter Rock, Paper, or Scissors:");
        const computerSelection = computerPlay();

        const result = playRound(playerSelection, computerSelection);
        console.log(result);

        if (result.includes("Win")) {
            playerScore++;
        } else if (result.includes("Lose")) {
            computerScore++;
        }
    }

    console.log(`Final Score - Player: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("You win the game!");
    } else if (playerScore < computerScore) {
        console.log("You lose the game!");
    } else {
        console.log("The game is a tie!");
    }
}

// Start the game
game();
