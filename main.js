let choice = Math.floor(Math.random()*100);

function getComputerChoice (choice) {
    if (choice <= 33) {
        return "rock";
    } else if (choice >= 34 && choice < 67) {
        return "paper";
    } else if (choice >= 67) {
        return "scissors";
    }
}

console.log(getComputerChoice(choice));