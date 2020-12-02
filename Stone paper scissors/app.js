
var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const sccoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");


function computerChoice() {
    const choices = ['r', 'p', 's'];
    return choices[Math.floor(Math.random() * 3)];
}


function win(userInput, compChoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 's') {
        result_p.innerHTML = `Computer choosed Scissors. You Win ✅🎉`;
    }
    else if (userInput === 'p' && compChoice === 'r') {
        result_p.innerHTML = `Computer choosed Rock. You Win ✅🎉`;
    }
    else if (userInput === 's' && compChoice === 'p') {
        result_p.innerHTML = `Computer choosed Paper. You Win ✅🎉`;
    }

    document.getElementById(userInput).classList.add('win');
    setTimeout(function () { document.getElementById(userInput).classList.remove('win'); }, 350);
}

function Loose(userInput, compChoice) {
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'p') {
        result_p.innerHTML = `Computer choosed Paper 📜 . You Lost ❌`;
    }
    else if (userInput === 'p' && compChoice === 's') {
        result_p.innerHTML = `Computer choosed Scissors ✂ . You Lost ❌`;
    }
    else if (userInput === 's' && compChoice === 'r') {
        result_p.innerHTML = `Computer choosed Rock ⬛ . You Lost ❌`;
    }
    document.getElementById(userInput).classList.add('loose');
    setTimeout(function () { document.getElementById(userInput).classList.remove('loose'); }, 350);

}

function Draw(userInput, compChoice) {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    if (userInput === 'r' && compChoice === 'r') {
        result_p.innerHTML = `Computer choosed Rock ⬛ . It's a Draw.`;
    }
    else if (userInput === 'p' && compChoice === 'p') {
        result_p.innerHTML = `Computer choosed Paper 📜 . It's a Draw.`;
    }
    else if (userInput === 's' && compChoice === 's') {
        result_p.innerHTML = `Computer chosoed Scissors ✂ . It's a Draw.`;
    }
    document.getElementById(userInput).classList.add('draw');
    setTimeout(function () { document.getElementById(userInput).classList.remove('draw'); }, 350);
}


function game(userInput) {
    const compChoice = computerChoice();
    const UserChoice = userInput + compChoice;
    if (UserChoice === "rs" || UserChoice === "pr" || UserChoice === "sp") {
        win(userInput, compChoice);
        console.log("Win");
    }
    else if (UserChoice === "rp" || UserChoice === "ps" || UserChoice === "sr") {
        Loose(userInput, compChoice);
        console.log("Loose");
    }
    else if (UserChoice === "rr" || UserChoice === "pp" || UserChoice === "ss") {
        Draw(userInput, compChoice);
        console.log("Draw");
    }
}

function main() {
    rock_div.addEventListener('click', function () {
        game('r');
    })
    paper_div.addEventListener('click', function () {
        game('p');
    })
    scissors_div.addEventListener('click', function () {
        game('s');
    })
}

main();