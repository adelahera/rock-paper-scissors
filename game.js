function playOneRound (playerSelection, computerSelection) {

    playerSelection = prompt("Choose rock, paper or scissors");
    console.log("Player's choice: " + playerSelection);

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
    console.log("Computer's choice: " + computerSelection);

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

    if (playerSelection === "paper") {
        if (computerSelection === "scissors") {
            return 2;
        }
        else {
            return 0;
        }
    }

    if (playerSelection === "scissors") {
        if (computerSelection === "rock") {
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
    let playerSelection;
    let computerSelection;

    while(!winner) {

        let aux = playOneRound(playerSelection, computerSelection);
        if(aux === 1) {
            console.log("That's a tie! Next round!");
        }
        else if (aux === 0){
            console.log("Player wins the round!");
            playerWins++;
            console.log("Result: " + playerWins + " - " + computerWins);
        }
        else if(aux === 2){
            console.log("Computer wins the round!");
            computerWins++;
            console.log("Result: " + playerWins + " - " + computerWins);
        }

        if(playerWins === 3) {
            alert("CONGRATULATIONS! YOU HAVE WON THE GAME!");
            winner = true;
        }
        else if(computerWins === 3) {
            alert("You lost, computer won the game");
            winner = true;
        }
    }
}

game();