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
  }
}

console.log(computerSelection);

