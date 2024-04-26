computerSelection = getComputerChoice();
playerSelection = getPlayerChoice();

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if(randomNumber == 2) {
      return "rock";
    } else if (randomNumber == 1) {
      return "paper";
    } else {
      return "scissors";
    }
} //end of getComputerChoice()

function getPlayerChoice() {
  let answer = (prompt("rock paper scissors"));
  return answer.toLowerCase();
} //end of getPlayerChoice()

//user input is compared with computer input to play the round
function playRound(playerSelection, computerSelection) {
  let result;
  if (playerSelection == computerSelection) {
    result = "It's a tie, try again";
  } else if (playerSelection == "paper") {
    if (computerSelection == "rock") {
      result = "You win, paper beats rock!";
    } else {
      result = "You lose, scissors beats paper...";
    }
  } else if (playerSelection == "rock") {
    if (computerSelection == "paper") {
      result = "You lose, paper beats rock...";
    } else {
      result = "You win, rock beats scissors!";
    }
  } else {
    if (computerSelection == "rock") {
      result = "You lose, rock beats scissors...";
    } else {
      result = "You win, scissors beats paper!";
    }
  }
  return result;
} //end of playRound()

//function to play the game five times
function playGame() {
  let result;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    alert(result);
  }
  alert("Thank you for playing!")
}

playGame();







