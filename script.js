const buttons = document.querySelectorAll("button");
const messageContainer = document.querySelector("#message");
const playersScore = document.querySelector("#players-score");
const computerScore = document.querySelector("#computer-score");

let playerPoints = 0;
let computerPoints = 0;

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const result = playRound(button.id, computerPlay());
    messageContainer.textContent = result;
  });
});

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  const randomChoice = Math.floor(Math.random() * choices.length);
  return choices[randomChoice];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Its a tie 🧐`;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerPoints++;
    playersScore.innerHTML = playerPoints;
    return `You win!🎉 ${playerSelection} beats ${computerSelection}`;
  } else {
    computerPoints++;
    computerScore.innerHTML = computerPoints;
    return `You lose! 🥲 ${computerSelection} beats ${playerSelection}`;
  }
}
