let humanScore = 0;
let computerScore = 0;
let games = 0;


function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors?")

    while (true) {
        switch (choice) {
            case 'rock':
            case 'paper':
            case 'scissors':
                return choice;
            default:
                choice = prompt("Invalid input. rock, paper or scissors?")
                break;
        }
    }
}

function playRound (humanChoice, computerChoice) {

    humanChoice = humanChoice.toLowerCase();

    if (computerChoice === humanChoice) {
        console.log(`Your ${humanChoice} ties with computer's ${computerChoice}`);
    } else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
    (humanChoice === 'scissors' && computerChoice === 'paper') ||
    (humanChoice === 'paper' && computerChoice === 'rock')) {
        console.log(`Your ${humanChoice} beats computer's ${computerChoice}`);
        humanScore++;
    } else {
        console.log(`Your ${humanChoice} lost to computer's ${computerChoice}`);
        computerScore++;
    }
}