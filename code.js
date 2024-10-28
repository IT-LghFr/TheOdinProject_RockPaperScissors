let pcChoice;
let playerChoice;
let playerScore = 0;
let pcScore = 0;
let scoreBoard;
const container = document.querySelector("#score");
const results = document.createElement('p');
const currentScore = document.createElement('h2');


function getPcChoice() {
    pcChoice = Math.floor(Math.random()*3+1);
    console.log(pcChoice)
    return pcChoice;
}
pcChoice = getPcChoice();
//console.log(pcChoice);

const rock = document.querySelector("#rock");
rock.addEventListener('click', () => {
    playerChoice = 1;
    getResult(playerChoice);
    
})
const paper = document.querySelector("#paper");
paper.addEventListener('click', () => {
    playerChoice = 2;
    getResult(playerChoice);
})
const scissors = document.querySelector("#scissors");
scissors.addEventListener('click', () => {
    playerChoice = 3;
    getResult(playerChoice);
    
})

function getResult(playerChoice) {
    //console.log(playerChoice);
    if(pcChoice == playerChoice) {
        results.textContent = "tie";
        container.appendChild(results);
    } else if (
        (pcChoice == 1 && playerChoice == 3) ||
        (pcChoice == 2 && playerChoice == 1) ||
        (pcChoice == 3 && playerChoice == 2)
        ) {
        results.textContent = "Computer won";
        container.appendChild(results);
        pcScore++;
    } else {
        results.textContent = "Player won";
        container.appendChild(results);
        playerScore++;
    }
    if(pcScore < 5 && playerScore < 5) {
        scoreBoard = "Current score: " + playerScore + " to " + pcScore + " Points";
        currentScore.textContent = scoreBoard;
        container.appendChild(currentScore);
        getPcChoice();
    } else if(playerScore == 5) {
        currentScore.textContent = "Player won!"
        container.appendChild(currentScore);
        pcScore = 0;
        playerScore = 0;
        getPcChoice();
    } else {
        currentScore.textContent = "Computer won!"
        container.appendChild(currentScore);
        pcScore = 0;
        playerScore = 0;
        getPcChoice();
    }
}
    


/*for(let i = 0; i < 5; i++) {
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
}*/
/*
if(playerScore > pcScore) {
    alert("Player won the game! " + playerScore + " to " + pcScore);
} else {
    alert("PC won the game! " + pcScore + " to " + playerScore);
}
*/
