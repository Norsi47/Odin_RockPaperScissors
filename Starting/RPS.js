//computers choice, random pick this when called
// const getComputerChoice = "Rock, Paper or Scissors";
// console.log(getComputerChoice);

function getComputerChoice() {
    const randomPick = ['rock', 'paper', 'scissors'];
    //logic for to pick random variable selections
    return randomPick[Math.floor(Math.random() * randomPick.length)]
}

// console.log(getComputerChoice());

//the score player starts with
// let playersStartScore = 10;

//single round of rock paper scissors
function playRound(playerSelection, computerSelection) {
    // computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "paper") {
        let  playersStartScore = 10 - 1
        return "You Lose! Paper Beats Rock",  console.log(` Players Score = ${playersStartScore}`);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
      let  playersStartScore = 10 + 1
        return "You win Scissors beats Paper ", console.log(`Players Score = ${playersStartScore}`) ;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
       let playersStartScore = 10 - 1
        return "You Lose rock beats scissors" , console.log(`Players Score = ${playersStartScore}`);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
       let playersStartScore = 10 + 1
        return "You Win Paper beats rock", `Players Score = ${playersStartScore}`;
    } else if (playerSelection === computerSelection) {
       let playersStartScore = 10
        return `It is a tie you both picked ${playerSelection}`, console.log(`Player Score = ${playersStartScore}, it is a tie`) ;
     }
    else {
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
    }

}

/*play 5 round that will keep score,
* reports winner or loser'
* -> want playRound function to loop 5 times
* -> save each return satement from player selection or computer
* -> print out the winner from who ever got selected 5 times in the loop*/
function game() {
//will loop through prompt question 5 times, start from 1-5 not 0-5
    for (let i = 1; i <= 5; i++) {
//to test player selection vs computer selection
//prompting user to enter solution
        const playerSelection = prompt("Hello, Please pick: Rock, Paper or Scissors").toLowerCase();
        const computerSelection = getComputerChoice();
        //print out who won
        console.log(playRound(playerSelection, computerSelection));

//print out the players and cpu selection to uppercase
        console.log(`\n ${i}-> Player Picked ${playerSelection} and Computer chose ${computerSelection}`.toUpperCase());
    }

}

console.log(game());


