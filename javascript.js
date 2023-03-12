//ask for player choise
let playerInput = prompt("Rock, Paper, or Scissors?:")
console.log(playerInput)

//generate computer choise
const computerOptions = ["rock","paper","scissors"]
let computerInput = Math.floor(Math.random()*computerOptions.length);
console.log(computerOptions[computerInput]);

//compair both imputs and output winner
if (playerInput.toLowerCase() == computerOptions[computerInput])
  {
    console.log("Tie")
  }
  else if ((playerInput.toLowerCase() == "rock") && (computerOptions[computerInput]=="scissors"))
  {
    console.log("You win!")
  }
  else if ((playerInput.toLowerCase() == "paper") && (computerOptions[computerInput] == "rock"))
  {
    console.log("You win!")
  }
  else if ((playerInput.toLowerCase() == "scissors") && (computerOptions[computerInput] == "paper"))
  {
    console.log("You win!")
  }
  else{
    console.log("You lose.")
  }
