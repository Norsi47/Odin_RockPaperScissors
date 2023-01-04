//computers choice, random pick this when called
// const getComputerChoice = "Rock, Paper or Scissors";
// console.log(getComputerChoice);

function getComputerChoice() {
  const randomPick = ['Rock', 'Paper', 'Scissors'];
  return randomPick[Math.floor(Math.random() *randomPick.length) ]
}
console.log(getComputerChoice());


//single round of rock paper scissors