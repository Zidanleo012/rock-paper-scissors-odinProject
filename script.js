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

let humanSelection = '';
let computerSelection = '';

const outcomes = {
    rock: { beats: 'scissors', message: 'rock beats scissors' },
    paper: { beats: 'rock', message: 'paper beats rock' },
    scissors: { beats: 'paper', message: 'scissors beat paper' }
}

let humanScore = 0;
let computerScore = 0;
let roundPlayed = 0;

function playGame(humanChoice, computerChoice) {

    function playRound() {
        roundPlayed += 1;
        
        if (roundPlayed > 5) return;
        if (humanChoice === computerChoice) {
            console.log("It's a draw! both don't get the point")
        } else if (outcomes[humanChoice]?.beats === computerChoice) {
            console.log(`You win! ${outcomes[humanChoice].message}`)
            humanScore += 1;
        } else {
            console.log(`You lose! ${outcomes[computerChoice].message}`);
            computerScore;
        }
    }

    playRound()

    if (roundPlayed === 5) {
        if (humanScore > computerScore) {
            console.log(`You Win! Score: ${humanScore} - ${computerScore}`)
        } else if (humanScore < computerScore) {
            console.log(`You lose! Score: ${humanScore} - ${computerScore}`)
        } else {
            console.log(`The game is a draw! Score: ${humanScore} - ${computerScore}`);
        }
    }
}


container.addEventListener('click', (e) => {
    let target = e.target;

    humanSelection = target.id;
    computerSelection = getComputerChoice();
    playGame(humanSelection, computerSelection)
})