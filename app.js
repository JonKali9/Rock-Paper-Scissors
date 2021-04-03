const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('computer-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_p = document.querySelector('.result p');
const rock_div = document.getElementById('r');
const paper_div = document.getElementById('p');
const scissors_div = document.getElementById('s');


function getComputerChoice() {
    const choices = ['r','p','s'];
    return choices[Math.floor(Math.random()*3)];
}


function win(user, comp) {
    userScore_span.innerHTML = parseInt(userScore_span.innerHTML) + 1;
    result_p.innerHTML = `${user} beats ${comp}, you win!`
}

function lose(user, comp) {
    computerScore_span.innerHTML = parseInt(computerScore_span.innerHTML) + 1;
    result_p.innerHTML = `${comp} beats ${user}, you lose!`
}

function tie(user) {
    result_p.innerHTML = `Both choose ${user}, you tie!`
}

function game(userChoice) {
    const computerChoice = getComputerChoice();
    console.log('User Choice: ' + userChoice);
    console.log('Computer Choice: ' + computerChoice);
    switch (userChoice) {
        case 'r':
            switch (computerChoice) {
                case 'r':
                    tie('Rock')
                    return 'tie';
                    break;
                case 'p':
                    lose('Rock', 'Paper');
                    return 'lose';
                    break;
                case 's':
                    win('Rock', 'Scissors');
                    return 'win';
                    break;
            }
            break;
        case 'p':
            switch (computerChoice) {
                case 'r':
                    win('Paper', 'Rock');
                    return 'win';
                    break;
                case 'p':
                    tie('Paper')
                    return 'tie';
                    break;
                case 's':
                    lose('Paper', 'Scissors');
                    return 'lose';
                    break;
            }
            break;
        case 's':
            switch (computerChoice) {
                case 'r':
                    lose('Scissors', 'Rock');
                    return 'lose';
                    break;
                case 'p':
                    win('Scissors', 'Paper')
                    return 'win';
                    break;
                case 's':
                    tie('Scissors')
                    return 'tie';
                    break;
            }
            break;
    }
}

function main() {
    rock_div.addEventListener('click', function() {
        game('r')
    })
    paper_div.addEventListener('click', function() {
        game('p')
    })
    scissors_div.addEventListener('click', function() {
        game('s')
    })
}

main();

