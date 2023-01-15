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
function playRound(playerSelection, computerSelection) {
    // computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You Lose! Paper Beats Rock";
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return "You win Scissors beats Paper";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return "You Lose rock beats scissors";
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return "You Win Paper beats rock";
    } else if (playerSelection === computerSelection) {
        return `It is a tie you both picked ${playerSelection}`;
     }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }


}


//to test player selection vs computer selection
//prompting user to enter solution
const playerSelection = prompt("Hello, Please pick: Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
//print out who won
console.log(playRound(playerSelection, computerSelection));
//print out the players and cpu selection to uppercase
console.log(`\nPlayer Picked ${playerSelection} and Computer chose ${computerSelection}`.toUpperCase());

/*play 5 round that will keep score,
* reports winner or loser'
* -> want playRound function to loop 5 times
* -> save each return satement from player selection or computer
* -> print out the winner from who ever got selected 5 times in the loop*/
function game() {
    let replayRound = playRound(playerSelection, computerSelection);
    for (let i = 0; i <= 5; i++) {
      let i = playRound(playerSelection, computerSelection);
       console.log(i);
    }
}

console.log(game());


