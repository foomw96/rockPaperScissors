let humanScore = 0;
let computerScore = 0;
let games = 0;

const buttons = document.querySelectorAll('button');

// add click event listener to each button
// playRound will be called on each click
buttons.forEach(button => {
    button.addEventListener('click', function(event) {
        playRound(event.target.id, getComputerChoice()); 
        // event.target.id is the human choice.
        // getComputerChoice() to generate computer choice
    })
});

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

function playRound (humanChoice, computerChoice) {

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