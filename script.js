function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3) + 1;

    switch (randomNum) {
        case 1:
            return "scissors";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "rock"
    }
}

function getHumanChoice(promptMessage = "Choose between Scissors, Paper or Rock") {
    let input = prompt(promptMessage).toLowerCase();
    if (input === "scissors" || input === "paper" || input === "rock") {
        return input;
    } else {
        getHumanChoice("Please only choose between 3 choices!")
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

function playGame(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    function playRound() {

        if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("You win! rock beats scissors");
            humanScore += 1;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("You win! paper beats rock");
            humanScore += 1;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("You win! scissors beat paper");
            humanScore += 1;
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            console.log("You lose! rock beats scissors")
            computerScore += 1;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            console.log("You lose! paper beats rock");
            computerScore += 1;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            console.log("You lose! scissors beat paper");
            computerScore += 1;
        } else {
            console.log("It's draw! both dont get the points")
        }
    }



    for (let i = 0; i < 5; i++) {
        playRound();

        if (i < 4) {
            humanChoice = getHumanChoice();
            computerChoice = getComputerChoice();
        }
    }

    if (humanScore > computerScore) {
        console.log(`You Win! Score: ${humanScore} - ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lose! Score: ${humanScore} - ${computerScore}`)
    } else {
        console.log(`The game is a draw! Score: ${humanScore} - ${computerScore}`);
    }

}

playGame(humanSelection, computerSelection);