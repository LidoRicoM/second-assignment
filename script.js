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
function getPlayerSelection(promptText = "No time to waste, choose Rock, Paper, or Scissors") {
  const playerSelection = prompt(promptText);

  if (playerSelection === null) {
    return null
  }

  if (playerSelection.trim() === "") {
    return getPlayerSelection("There is no escape! Your selection cannot be empty! Enter Rock, Paper, or Scissors or we all die!")
  } else {
    const validatedSelection = playerSelection.trim().toLowerCase()

    // Return if valid value or re-prompt
    if (choices.includes(validatedSelection)) {
      return validatedSelection
    } else return getPlayerSelection("This is not the way to win! You need to choose between Rock, Paper or Scissors!")
  }
}

// Step 2: Function that plays one round
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return { result: "tie", message: `That was close. It's a tie! You both chose ${playerSelection}. Don't give up!` };
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return { result: "win", message: `You Win! ${playerSelection} beats ${computerSelection}` };
  } else {
    return { result: "lose", message: `Oh No - You Lose! ${computerSelection} beats ${playerSelection}` };
  }
}

// Step 3: Function to play 5 rounds
function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let computerSelection = getComputerSelection()
    const playerSelection = getPlayerSelection()


    if (playerSelection === null) {
      console.log("Exiting the game...");
      return;
    }

    const roundResult = playRound(playerSelection, computerSelection);
    console.log(roundResult.message);

    if (roundResult.result === "win") {
      playerScore++;
    } else if (roundResult.result === "lose") {
      computerScore++;
    }
  }

  console.log(`Final Score - Hero: ${playerScore}, Evil AI: ${computerScore}`);
  if (playerScore > computerScore) {
    console.log("You win the game and save the world!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game! Now the AI is unstoppable!");
  } else {
    console.log("The game is a tie! Hurry, refresh the page for another chance to defeat the AI!");
  }
}

function startGame() {
  window.alert(`
    Open Developer Console to see extra logs and hints:
    - Windows/Linux: F12 or Ctrl+Shift+I
    - Mac: Cmd+Option+I
  `)

  console.log("Oh no an evil AI is trying to take control over the world! Only you and your skills in Rock Paper Scissors can save it! You need to win within 5 rounds or we are all DOOMED!")

  game()

  const retry = confirm("Do you want to save the world again? Click OK or Cancel.");
  if (retry) {
    console.clear()
    startGame()
  }
}

startGame()