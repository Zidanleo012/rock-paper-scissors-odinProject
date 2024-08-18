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
const imgWrapper = document.querySelector('#img-container');
const humanDisplayScore = document.querySelector('#humanDisplayScore');
const computerDisplayScore = document.querySelector('#computerDisplayScore');
const scoreResult = document.querySelector('#scoreResult');

function playGame(humanChoice, computerChoice) {

    function playRound() {
        roundPlayed += 1;
        if (humanChoice === computerChoice) {
            console.log("It's a draw! both don't get the point")
            scoreResult.textContent = "It's a draw! both don't get the point"
        } else if (outcomes[humanChoice]?.beats === computerChoice) {
            console.log(`You win! ${outcomes[humanChoice].message}`);
            humanScore += 1;
            humanDisplayScore.textContent = `Human score: ${humanScore}`
            scoreResult.textContent = `You win! ${outcomes[humanChoice].message}`
        } else {
            console.log(`You lose! ${outcomes[computerChoice].message}`);
            computerScore += 1;
            computerDisplayScore.textContent = `Computer Score: ${computerScore}`
            scoreResult.textContent = `You win! ${outcomes[computerChoice].message}`

        }
    }
    if (humanScore === 5 || computerScore === 5) return;

    playRound()

    if (humanScore === 5) {
        console.log(`You Win! Score: ${humanScore} - ${computerScore}`);
        scoreResult.textContent = 'YOU WIN THE GAME!!!'
    } else if (computerScore === 5) {
        console.log(`You lose! Score: ${humanScore} - ${computerScore}`);
        scoreResult.textContent = 'YOU LOSE THE GAME!!!'
    }
}

imgWrapper.addEventListener('click', (e) => {
    let target = e.target;

    humanSelection = target.id;
    computerSelection = getComputerChoice();
    playGame(humanSelection, computerSelection)
})