

function computerSelection() {
    let getComputerChoice = Math.floor(Math.random() * 3);
    if(getComputerChoice == 2) {
      console.log("Rock");
    } else if (getComputerChoice == 1) {
      console.log("Paper");
    } else {
      console.log("Scissors");
    }
}



// let computerSelection = function getComputerChoice() {
  //  Math.floor(Math.random() * 3);
  //  return computerSelection;
// }; - This was my original code for the above and didn't work





