let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.random();

  if (choice < 0.333) {
    choice = "rock";
  } else if (choice < 0.666) {
    choice = "paper";
  } else {
    choice = "scissors";
  }

  return choice;
}

function getHumanChoice() {
  let choice = prompt("Choose from rock, paper, and scissors").toLowerCase();
  return choice;
}

function playRound(humanChoice, computerChoice) {
  if ((humanChoice() === "rock") === (computerChoice() === "rock")) {
    console.log("You tied! You chose rock, computer chose rock");
  }
  if ((humanChoice() === "rock") === (computerChoice() === "paper")) {
    console.log("You lose! You chose rock, computer chose paper");
  }
  if ((humanChoice() === "rock") === (computerChoice() === "scissors")) {
    console.log("You win! You chose rock, computer chose scissors");
  }
  if ((humanChoice() === "paper") === (computerChoice() === "rock")) {
    console.log("You win! You chose paper, computer chose rock");
  }
  if ((humanChoice() === "paper") === (computerChoice() === "paper")) {
    console.log("You tied! You chose paper, computer chose paper");
  }
  if ((humanChoice() === "paper") === (computerChoice() === "scissors")) {
    console.log("You lose! You chose paper, computer chose scissors");
  }
  if ((humanChoice() === "scissors") === (computerChoice() === "rock")) {
    console.log("You lose! You chose scissors, computer chose rock");
  }
  if ((humanChoice() === "scissors") === (computerChoice() === "paper")) {
    console.log("You win! You chose scissors, computer chose paper");
  }
  if ((humanChoice() === "scissors") === (computerChoice() === "scissors")) {
    console.log("You tied! You chose scissors, computer chose scissors");
  }
  return;
}

console.log(playRound(getHumanChoice, getComputerChoiceg));
