let pcChoice;
let playerChoice;
let playerScore = 0;
let pcScore = 0;

for(let i = 0; i < 5; i++) {
    function getPcChoice() {
        pcChoice = Math.floor(Math.random()*3+1);
        console.log(pcChoice)
        return pcChoice;
    }
    pcChoice = getPcChoice();
    
    function getHuChoice() {
        let huchoice = prompt("1=Rock, 2=Paper, 3=Scissors");
        return huchoice;
    }
    playerChoice = getHuChoice();
    
    if(pcChoice == playerChoice) {
        console.log('tie');
    } else if (
        (pcChoice == 1 && playerChoice == 3) ||
        (pcChoice == 2 && playerChoice == 1) ||
        (pcChoice == 3 && playerChoice == 2)
        ) {
        console.log('Pc won');
        pcScore++;
    } else {
        console.log('Player won');
        playerScore++;
    }
    
    alert("Player score: " + playerScore + "\n" + "Pc score: " + pcScore);    
}

if(playerScore > pcScore) {
    alert("Player won the game! " + playerScore + " to " + pcScore);
} else {
    alert("PC won the game! " + pcScore + " to " + playerScore);
}

