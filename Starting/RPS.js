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
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}


//to test player selection vs computer selection
//prompting user to enter solution
const playerSelection = prompt("Hello, Please pick: Rock, Paper or Scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

/*play 5 round that will keep score,
* reports winner or loser'*/
function game() {
   let keepScore = playRound();
   for (keepScore = 0; keepScore < 5; keepScore++) {
       if (keepScore > playerSelection) {
           console.log(`${playerSelection}, You won`);
       }

   }

}