
// This scissor paper rock will get random value from the computer as well as get input value from the user, each time one of them win increment the score by one and play the round 5 times.

// Create a function named getComputerChoice that randomly return "rock", "paper", or "scissor" from computer.

// Create a function named getHumanChoice that get rock, paper, or scissor input from user.

// assign the getComputerChoice to computerSelection variable
// assign the getHumanChoice to humanSelection variable

// declare global variable for computer and human's score

// create a playRound function to decide the winner's round, print the text wins or loses and increment the score for the winner.
// use conditional if statement to determine the winner
// create function named playRound and move the playRound function inside the playGame function.

// use loop to play the rounds 5 times

// get computer's random choice
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

// get user's choice that only allows to choose between three choices
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

// function to play the game of 5 rounds
function playGame(humanChoice, computerChoice) {
    let humanScore = 0;
    let computerScore = 0;

    // conditional statements for logging the winner's text and increment the score
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

        // Get new values for humanChoice and computerChoice
        humanChoice = getHumanChoice();
        computerChoice = getComputerChoice();
    }

    // loop the round 5 times
    for (let i = 0; i < 5; i++) {
        playRound();
    }

    // Decide who is the winner or draw
    if (humanScore > computerScore) {
        console.log(`You Win! Score: ${humanScore} - ${computerScore}`)
    } else if (humanScore < computerScore) {
        console.log(`You lose! Score: ${humanScore} - ${computerScore}`)
    } else {
        console.log(`The game is a draw! Score: ${humanScore} - ${computerScore}`);
    }
}

playGame(humanSelection, computerSelection);

// Score: ${humanScore} - ${playerScore}



// if (humanChoice === "rock" && computerChoice === "scissors" || humanChoice === "paper" && computerChoice === "rock" || humanChoice === "scissors" && computerChoice === "paper") {
//     humanScore += 1;
// } else {
//     computerScore += 1;
// }