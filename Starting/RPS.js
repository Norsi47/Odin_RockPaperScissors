//computers choice, random pick this when called
// const getComputerChoice = "Rock, Paper or Scissors";
// console.log(getComputerChoice);

//message for game, <b> to make it bold
 document.write("<b>Rock Paper Scissors Game, Inspect Console to see difference</b>");

function getComputerChoice() {
    const randomPick = ['rock', 'paper', 'scissors'];
    //logic for to pick random variable selections
    return randomPick[Math.floor(Math.random() * randomPick.length)]
}


//the score player starts with
let playersStartScore = 5;
let cpuStartScore = 5;

//single round of rock paper scissors
function playRound(playerSelection, computerSelection) {

    // computerSelection = getComputerChoice();
    if (playerSelection === "rock" && computerSelection === "paper") {

        return `You Lose! Paper Beats Rock, Players Score = ${playersStartScore - 1}, CPU Score = ${cpuStartScore++}`;

    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return `You win Scissors beats Paper, Players Score = ${playersStartScore + 1} , CPU Score = ${cpuStartScore--}`;
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return `You Lose rock beats scissors, Players Score = ${playersStartScore - 1}, CPU Score = ${cpuStartScore++}`;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {

        return `You Win Paper beats rock, Players Score = ${playersStartScore + 1}, CPU Score = ${cpuStartScore--}`;
    } else if (playerSelection === "scissors" && computerSelection === `Rock`) {
        return `You Lose Rock beats Scissors. Players Score= ${playersStartScore - 1}, CPU Score = ${cpuStartScore++}`;

    } else if (playerSelection === computerSelection) {
        return `It is a tie you both picked ${playerSelection}, Player Score = ${playersStartScore}, CPU Score = ${cpuStartScore} no points added, it is a tie`;
    } else {
        return `You Lose! ${computerSelection} beats ${playerSelection}, ComputerWins ${cpuStartScore++}, PlayerOne Wins ${playersStartScore--}`;
    }


}

/*play 5 round that will keep score,
* reports winner or loser
* -> want playRound function to loop 5 times ( done)
* -> save each return satement from player selection or computer (kinda done)
* -> print out the winner from who ever got selected 5 times in the loop*/
function game() {
//will loop through prompt question 5 times, start from 1-5 not 0-5
    for (let i = 1; i < 6; i++) {
//to test player selection vs computer selection
//prompting user to enter solution
        const playerSelection = prompt("Hello, Please pick: Rock, Paper or Scissors").toLowerCase();
        const computerSelection = getComputerChoice();

//print out the players and cpu selection to uppercase
        console.log(`\n ${i}-> Player Picked ${playerSelection} and Computer chose ${computerSelection}`.toUpperCase());

        //print out who won
        console.log(playRound(playerSelection, computerSelection));

    }

//to print out who wins
    if (cpuStartScore > 6) {
        console.log("Computer wins");
    } else if (playersStartScore > 6) {
        console.log("Player wins")
    } else {
        return "Nobody won";
    }

}

console.log(game());

//project done my way, off to next chapter
