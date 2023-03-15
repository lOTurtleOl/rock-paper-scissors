

function computerSelection() {
    let getComputerChoice = Math.floor(Math.random() * 3);
    if(getComputerChoice == 2) {
      return "rock";
    } else if (getComputerChoice == 1) {
      return "paper";
    } else {
      return "scissors";
    }
}

function playerSelection() {
  let getPlayerChoice = (prompt("rock paper scissors"));
  return getPlayerChoice.toLowerCase();
}


// let computerSelection = function getComputerChoice() {
  //  Math.floor(Math.random() * 3);
  //  return computerSelection;
// }; - This was my original code for the above and didn't work

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {

  }

}

