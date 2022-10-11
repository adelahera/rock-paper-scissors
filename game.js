var playerSelection = prompt("Choose rock, paper or scissors");

var computerSelection = Math.ceil(Math.random() * 3);

if(computerSelection < 1){

    computerSelection = "rock";
}
else if (1 <= computerSelection <= 2){
    computerSelection = "paper";
}
else {
    computerSelection = "scissors"
}

function playOneRound (playerSelection, computerSelection) {

    if(playerSelection === computerSelection){

        return 1;
    }

    if(playerSelection === "rock") {
        if(computerSelection === "scissors") {
            return 0;
        }
        else {
            return 2;
        }
    }

    if (playerChoice === "paper") {
        if (computerChoice === "scissors") {
            return 2;
        }
        else {
            return 0;
        }
    }

    if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
            return 2;
        }
        else {
            return 0;
        }
    }
}

function game() {

    let winner = false;
    let playerWins = 0;
    let computerWins = 0;

    while(!winner) {

        let aux = playOneRound(playerSelection, computerSelection);
        if(aux === 1) {
            console.log("That's a tie! Next round!");
        }
        else if (aux === 0){
            console.log("Player wins the round!");
        }
        else {
            console.log("Computer wins the round!");
        }

        if(playerWins === 3) {
            console.log("CONGRATULATIONS! YOU HAVE WON THE GAME!");
            winner = true;
        }
        else if(computerWins === 3) {
            console.log("You lost, computer won the game");
            winner = true;
        }
    }
}

console.log(game());