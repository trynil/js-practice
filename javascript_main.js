//sets initial values
let win = 0
let lose = 0
let tie = 0
let x=0
const computerOptions = ["rock","paper","scissors"]
let playerSelection = ""
let computerSelection = ""
let results = ""
textScoreChoiceSetUp();
//game functions
function getComputerChoice(){
    let computerInput = Math.floor(Math.random()*computerOptions.length);
    return computerSelection = computerOptions[computerInput];
 }
    
function getPlayerChoice(y){
return playerSelection = y
}

function playRound() {
    if (playerSelection.toLowerCase() == computerSelection)
    {
    return x = 1
    }
    else if ((playerSelection.toLowerCase() == "rock") && (computerSelection == "scissors")){
        return x = 2
    }
    else if ((playerSelection.toLowerCase() == "paper") && (computerSelection == "rock")){
        return x = 2
    }
     else if ((playerSelection.toLowerCase() == "scissors") && (computerSelection == "paper")){
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
function wlt(){
    if (x == 1){
        return results = "It's a Tie"
    }
         else if (x == 2){
            return results = "You Win!"
        }
        else if(x == 3){
            return results = "You lose...:("
        }
        else(x == null)
}
//set starting score, choices, and result
function textScoreChoiceSetUp(){
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

const result = document.querySelector('#results');

    const resultTxt = document.createElement('div');
    resultTxt.classList.add('content');
    resultTxt.textContent = results;

    result.appendChild(resultTxt);
}
//update score, choices and result
function textUpdate(){

const winCount = document.querySelector('.winCount');
    
    const contentWin = document.createElement('div');
    contentWin.classList.add('content');
    contentWin.textContent = win;
    
    
    winCount.appendChild(contentWin);
    winCount.removeChild(winCount.firstElementChild);
    
    
const loseCount = document.querySelector('.lossCount');
    
    const contentLose = document.createElement('div');
    contentLose.classList.add('content');
    contentLose.textContent = lose;
    
    loseCount.appendChild(contentLose);
    loseCount.removeChild(loseCount.firstElementChild);
    
const tieCount = document.querySelector('.tieCount');
    
    const contentTie = document.createElement('div');
    contentTie.classList.add('content');
    contentTie.textContent = tie;
    
    tieCount.appendChild(contentTie);
    tieCount.removeChild(tieCount.firstElementChild);
    
const choicePlayer = document.querySelector('#player');
    
    const contentPlayer = document.createElement('div');
    contentPlayer.classList.add('content');
    contentPlayer.textContent = playerSelection;
    
    choicePlayer.appendChild(contentPlayer);
    choicePlayer.removeChild(choicePlayer.firstElementChild);
    
const choiceComputer = document.querySelector('#computer');
    
    const contentComputer = document.createElement('div');
    contentComputer.classList.add('content');
    contentComputer.textContent = computerSelection;
    
    choiceComputer.appendChild(contentComputer);
    choiceComputer.removeChild(choiceComputer.firstElementChild);
    
const result = document.querySelector('#results');

    const resultTxt = document.createElement('div');
    resultTxt.classList.add('content');
    resultTxt.textContent = results;

    result.appendChild(resultTxt);
    result.removeChild(result.firstElementChild);
}
//listen for button click
document.getElementById("rock").addEventListener("click", myFunctionRock);
document.getElementById("paper").addEventListener("click", myFunctionPaper);
document.getElementById("scissors").addEventListener("click", myFunctionScissors);

//preforms a round based on button
function myFunctionRock(){
    getComputerChoice();
    getPlayerChoice("rock");
    playRound();
    count();
    wlt();
    textUpdate();
}
function myFunctionPaper(){
    getComputerChoice();
    getPlayerChoice("paper");
    playRound();
    count();
    wlt();
    textUpdate();
}
function myFunctionScissors(){
    getComputerChoice();
    getPlayerChoice("scissors");
    playRound();
    count();
    wlt();
    textUpdate();
}