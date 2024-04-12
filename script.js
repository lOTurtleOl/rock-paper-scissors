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
}

/* function get
In this article
Try it
Syntax
Description
Examples
Specifications
Browser compatibility
See also
break
The break statement terminates the current loop or switch statement and transfers program control to the statement following the terminated statement. It can also be used to jump past a labeled statement when used within that labeled statement.

Try it

Syntax
JS
Copy to Clipboard
break;
break label;
label Optional
Identifier associated with the label of the statement to break to. If the break statement is not nested within a loop or switch, then the label identifier is required.

Description
When break; is encountered, the program breaks out of the innermost switch or looping statement and continues executing the next statement after that.

When break label; is encountered, the program breaks out of the statement labeled with label and continues executing the next statement after that. The break statement needs to be nested within the referenced label. The labeled statement can be any statement (commonly a block statement); it does not have to be another loop statement.

A break statement, with or without a following label, cannot be used at the top level of a script, module, function's body, or static initialization block, even when the function or class is further contained within a loop.

Examples
break in while loop
The following function has a break statement that terminates the while loop when i is 3, and then returns the value 3 * x.

JS
Copy to Clipboard
function testBreak(x) {
  let i = 0;

  while (i < 6) {
    if (i === 3) {
      break;
    }
    i += 1;
  }

  return i * x;
}
break in switch statements
The following code has a break statement that terminates the switch statement when a case is matched and the corresponding code has run.

JS */ // No idea what this stuff above is, JS just froze for 20 minutes and then it appeared


function getPlayerChoice() {
  let answer = (prompt("rock paper scissors"));
  return answer.toLowerCase();
}

//Below is my attempt to create a try catch with functioning error handling but it wasn't working
// function getPlayerChoice() {
//   while (true) {
//     try {
//       let answer = (prompt("rock paper scissors"));
//       if (answer != "rock" || answer != "paper" || answer != "scissors") {
//         new error("You and I both know that's not what I asked for.");
        
//       } else {
//           return answer.toLowerCase();
//           break;
//       }
      
//     } catch (error) {
//       throw new error();
//     }
//   }
// } //End of getPlayerChoice()


// let computerSelection = function getComputerChoice() {
  //  Math.floor(Math.random() * 3);
  //  return computerSelection;
// }; - This was my original code for the above and didn't work

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
}

function playGame() {
  let result;
  for (let i = 0; i < 5; i++) {
    let playerSelection = getPlayerChoice();
    let computerSelection = getComputerChoice();
    result = playRound(playerSelection, computerSelection);
    console.log(result);
    alert(result);
  }
}

playGame();

//The game is functioning, but I don't understand why it is asking the first question twice





