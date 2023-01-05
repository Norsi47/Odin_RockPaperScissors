//computers choice, random pick this when called
// const getComputerChoice = "Rock, Paper or Scissors";
// console.log(getComputerChoice);

function getComputerChoice() {
    const randomPick = ['rock', 'paper', 'scissors'];
    //logic for to pick random variable selections
    return randomPick[Math.floor(Math.random() * randomPick.length)]
}

// console.log(getComputerChoice());


//single round of rock paper scissors
function roundRockPaperScissors(playerSelection, computerSelection) {
    // computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper Beats Rock";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win Scissors beats Paper";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Lose rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
      return "You Win Paper beats rock";
    }
    else if (playerSelection === computerSelection) {
        return `It is a tie you both picked ${playerSelection}`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection} `;
    }

}


//to test player selection vs computer selection
const playerSelection = prompt("Hello, Please pick: Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(roundRockPaperScissors(playerSelection, computerSelection));
