console.log(getHumanChoice());

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