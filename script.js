const computerSelection = getComputerChoice();
const playerSelection = getPlayerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 2) {
      return "rock";
    } else if (randomNumber == 1) {
      return "paper";
    } else {
      return "scissors";
    }
}

function getPlayerChoice() {
  let answer = (prompt("rock paper scissors"));
  return answer.toLowerCase();
}


// let computerSelection = function getComputerChoice() {
  //  Math.floor(Math.random() * 3);
  //  return computerSelection;
// }; - This was my original code for the above and didn't work

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    alert("It's a tie, try again");
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      alert("You win, paper beats rock!")
    } else {
      alert("You lose, scissors beats paper...")
    }
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      alert("You lose, paper beats rock...")
    } else {
      alert("You win, rock beats scissors!")
    }
  } else {
    if (computerSelection == "rock") {
      alert("You lose, rock beats scissors...")
    } else {
      alert("You win, scissors beats paper!")
    }
  }
}

console.log(playRound());

