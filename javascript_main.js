let win = 0
let lose = 0
let tie = 0
let x=0
const computerOptions = ["rock","paper","scissors"]
let playerSelection = ""
let computerSelection = ""




    
    function getComputerChoice(){
        let computerInput = Math.floor(Math.random()*computerOptions.length);
        return computerSelection = computerOptions[computerInput]
        console.log(computerOptions[computerInput]);
        }
    

    function getPlayerChoice(y){
    return playerSelection = y
    console.log(playerSelection)}


    function playRound() {
        if (playerSelection.toLowerCase() == computerSelection)
        {
        return x = 1
        }
        else if ((playerSelection.toLowerCase() == "rock") && (computerSelection == "scissors"))
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
function textUpdate(){
const winCount = document.querySelector('.winCount');

const contentWin = document.createElement('div');
contentWin.classList.add('content');
contentWin.textContent = win;

winCount.appendChild(contentWin);

const loseCount = document.querySelector('.lossCount');

const contentLose = document.createElement('div');
contentLose.classList.add('content');
contentLose.textContent = lose;

loseCount.appendChild(contentLose);

const tieCount = document.querySelector('.tieCount');

const contentTie = document.createElement('div');
contentTie.classList.add('content');
contentTie.textContent = tie;

tieCount.appendChild(contentTie);

const choicePlayer = document.querySelector('#player');

const contentPlayer = document.createElement('div');
contentPlayer.classList.add('content');
contentPlayer.textContent = playerSelection;

choicePlayer.appendChild(contentPlayer);

const choiceComputer = document.querySelector('#computer');

const contentComputer = document.createElement('div');
contentComputer.classList.add('content');
contentComputer.textContent = computerSelection;

choiceComputer.appendChild(contentComputer);
}

document.getElementById("rock").addEventListener("click", myFunctionRock);
document.getElementById("paper").addEventListener("click", myFunctionPaper);
document.getElementById("scissors").addEventListener("click", myFunctionScissors);


function myFunctionRock(){
    getComputerChoice();
    getPlayerChoice("rock");
    playRound();
    count();
    textUpdate();
}
function myFunctionPaper(){
    getComputerChoice();
    getPlayerChoice("paper");
    playRound();
    count();
    textUpdate();
}
function myFunctionScissors(){
    getComputerChoice();
    getPlayerChoice("scissors");
    playRound();
    count();
    textUpdate();
}