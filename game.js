let myScore = 0;
let compScore = 0;
let computerSelection;
const _r = document.getElementById("rock");
const _p = document.getElementById("paper"); 
const _s = document.getElementById("scissors");

_r.addEventListener("click", () => {
    playRound("rock",computerSelection)});

_p.addEventListener("click", () => {
    playRound("paper",computerSelection)});

_s.addEventListener("click", () => {
    playRound("scissors",computerSelection)});

function playRound (playerSelection, computerSelection) {
   
    let x = Math.floor(Math.random() * 3);

    if(x == 0){
        computerSelection = "rock";
    }
    else if (x == 1){
        computerSelection = "paper";
    }
    else if(x == 2){
        computerSelection = "scissors"
    }

    if(playerSelection === computerSelection){

        document.getElementById("results").innerHTML = "Draw! You made the same choice -- Current score: " + myScore + " - " + compScore;
    }
    else if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            myScore++;
            document.getElementById("results").innerHTML = "You win the round! -- Current score: " + myScore + " - " + compScore;
            
        }
        else {
            compScore++;
            document.getElementById("results").innerHTML = "Computer wins the round! -- Current score: " + myScore + " - " + compScore;
            
        }
    }
    else if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            compScore++;
            document.getElementById("results").innerHTML = "Computer wins the round! -- Current score: " + myScore + " - " + compScore;
            
        }
        else {
            myScore++;
            document.getElementById("results").innerHTML = "You win the round! -- Current score: " + myScore + " - " + compScore;
            
        }
    }
    else if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
            compScore++;
            document.getElementById("results").innerHTML = "Computer wins the round! -- Current score: " + myScore + " - " + compScore;
            
        }
        else {
            myScore++;
            document.getElementById("results").innerHTML = "You win the round! -- Current score: " + myScore + " - " + compScore;
           
        }
    }

    document.getElementById("mychoices").innerHTML = "Player's choice: " + playerSelection;    
    document.getElementById("compchoices").innerHTML = "Computer's choice: " + computerSelection;

    if(myScore == 5) {
        myScore = 0;
        compScore = 0;
        document.getElementById("results").innerHTML = "You have reached 5 points! End of the game! Click again to restart"
    }
    else if(compScore == 5) {
        myScore = 0;
        compScore = 0;
        document.getElementById("results").innerHTML = "Computer has reached 5 points! End of the game! Click again to restart"
    }
}

