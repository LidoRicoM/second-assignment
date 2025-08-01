// =======================
// Rock Paper Scissors Game
// Second Assignment
// =======================


const choices = ["rock", "paper", "scissors"];

// Step 1: Function that returns a random choice for the computer
function getComputerSelection() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

// Function that prompts user selection
function getPlayerSelection(promptText = "Enter Rock, Paper, or Scissors:") {
  const playerSelection = prompt(promptText);
  if (playerSelection === null || playerSelection.trim() === "") {
    return getPlayerSelection("Value cannot be empty. Enter Rock, Paper, or Scissors:")
  } else {
    const validatedSelection = playerSelection.trim().toLowerCase()

    // Return if valid value or re-prompt
    if (choices.includes(validatedSelection)) {
      return validatedSelection
    } else return getPlayerSelection("Invalid value. Enter only Rock, Paper, or Scissors:")
  }
}

// Step 2: Function that plays one round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return { result: "tie", message: `It's a tie! You both chose ${playerSelection}` };
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return { result: "win", message: `You Win! ${playerSelection} beats ${computerSelection}` };
  } else {
    return { result: "lose", message: `You Lose! ${computerSelection} beats ${playerSelection}` };
  }
}

// Step 3: Function to play 5 rounds
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = computerPlay()
    const playerSelection = getPlayerSelection()

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult.message);

    if (roundResult.result === "win") {
      playerScore++;
    } else if (roundResult.result === "lose") {
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
