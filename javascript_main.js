let win = 0
let lose = 0
let tie = 0
let x=0
let playerSelection = ""
let computerSelection = ""


    
    function getComputerChoise(){
        const computerOptions = ["rock","paper","scissors"]
        computerInput = Math.floor(Math.random()*computerOptions.length);
        return computerOptions[computerInput]
        console.log(computerOptions[computerInput]);
    }
    

    function getPlayerChoise(){
    return playerSelection = prompt("Rock, Paper, or Scissors?:")
    console.log(playerSelection)}


    function playRound() {
        if (playerSelection.toLowerCase() == computerSelection)
        {
        return x = 1
        }
        else if ((playerSelection.toLowerCase() == "rock") && (computerSelection[computerInput]=="scissors"))
        {
        return x = 2
        }
        else if ((playerSelection.toLowerCase() == "paper") && (computerSelection == "rock"))
        {
            return x = 2
        }
        else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection == "paper"))
        {
            return x = 2
        }
        else{
            return x = 3
    }
    }  


function count(){
    if (x == 1){
    console.log("It's a tie.")
    tie++
    }
        else if (x == 2){
            win++
            console.log("You win!")
        }
        else if(x == 3){
            console.log("You lose :(")
            lose++
        }
        else(x == null)
}

    for (let i = 0; i < 5; i++) {
        computerSelection = getComputerChoise()
        playerSelection = getPlayerChoise()
        playRound()
        count()
        console.log("Win:"+win)
        console.log("Loses:"+lose)
        console.log("Ties:"+tie)
     }