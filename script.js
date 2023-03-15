

function computerSelection() {
    let getComputerChoice = Math.floor(Math.random() * 3);
    if(getComputerChoice == 2) {
      return "Rock";
    } else if (getComputerChoice == 1) {
      return "Paper";
    } else {
      return "Scissors";
    }
}



// let computerSelection = function getComputerChoice() {
  //  Math.floor(Math.random() * 3);
  //  return computerSelection;
// }; - This was my original code for the above and didn't work

console.log(computerSelection());



