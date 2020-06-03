var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("Rock");
const paper_div = document.getElementById("Paper");
const scissors_div = document.getElementById("Scissor");
const glowTime = 500;
const glowWin = "green-glow";
const glowLose = "red-glow";
const glowDraw = "grey-glow";

// this is an "enum" or "enumerator"
const GameResult = {
	WIN: 0,
	LOSE: 1,
	DRAW: 2
}

function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissor'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function updateScoreDisplay() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function evaluateGame(result, userChoice, computerChoice) {
    if (result == GameResult.WIN) {
        userScore++;
		result_p.innerHTML = `Your ${userChoice} beats Computer's ${computerChoice}. You Win!`;
		applyResultGlow(glowWin, userChoice)
    }
    else if (result == GameResult.LOSE) {
        computerScore++;
		result_p.innerHTML = `Your ${userChoice} loses against Computer's ${computerChoice}. You Lost!`;
		applyResultGlow(glowLose, userChoice)
    }
    else {
		result_p.innerHTML = `Your ${userChoice} equals Computer's ${computerChoice}. Draw!`;
		applyResultGlow(glowDraw, userChoice)
    }
        
    updateScoreDisplay();
}

function applyResultGlow(glow, userChoice) {
    document.getElementById(userChoice).classList.add(glow);
	setTimeout(function() { document.getElementById(userChoice).classList.remove(glow) }, glowTime);
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	console.log("computer choice =>" + computerChoice);

	var result = -1;

	switch (userChoice + computerChoice){
		case "RockScissor":
		case "PaperRock":
		case "ScissorPaper":
            result = GameResult.WIN;
			break;
		case "RockPaper":
		case "PaperScissor":
		case "ScissorRock":
            result = GameResult.LOSE;
			break;
		case "RockRock":
		case "ScissorScissor":
		case "PaperPaper":
            result = GameResult.DRAW;
			break;
	}

	evaluateGame(result, userChoice, computerChoice);
}

function main() {
	rock_div.addEventListener('click', function() {
		game("Rock");
	})
	paper_div.addEventListener('click', function() {
		game("Paper");
	})
	scissors_div.addEventListener('click', function() {
		game("Scissor");
	})
}

window.onload = function() {
    main();
}