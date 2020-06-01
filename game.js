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

function getComputerChoice() {
	const choices = ['Rock', 'Paper', 'Scissor'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function win(userChoice, computerChoice) {
	userScore++;
	updateScoreDisplay();
    result_p.innerHTML = `Your ${userChoice} beats Computer's ${computerChoice}. You Win!`;
	document.getElementById(userChoice).classList.add(glowWin);
	setTimeout(function() { document.getElementById(userChoice).classList.remove(glowWin) }, glowTime);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	updateScoreDisplay();
    result_p.innerHTML = `Your ${userChoice} loses against Computer's ${computerChoice}. You Lost!`;
	document.getElementById(userChoice).classList.add(glowLose);
	setTimeout(function() { document.getElementById(userChoice).classList.remove(glowLose) }, glowTime);
}

function draw(userChoice, computerChoice) {
	updateScoreDisplay();
    result_p.innerHTML = `Your ${userChoice} equals Computer's ${computerChoice}. Draw!`;
	document.getElementById(userChoice).classList.add(glowDraw);
	setTimeout(function() { document.getElementById(userChoice).classList.remove(glowDraw) }, glowTime);
}

function updateScoreDisplay() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	console.log("computer choice =>" + computerChoice);
	switch (userChoice + computerChoice){
		case "RockScissor":
		case "PaperRock":
		case "ScissorPaper":
			win(userChoice, computerChoice);
			break;
		case "RockPaper":
		case "PaperScissor":
		case "ScissorRock":
			lose(userChoice, computerChoice);
			break;
		case "RockRock":
		case "ScissorScissor":
		case "PaperPaper":
			draw(userChoice, computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function(){
		game("Rock");
	})
	paper_div.addEventListener('click', function(){
		game("Paper");
	})
	scissors_div.addEventListener('click', function(){
		game("Scissor");
	})
}

window.onload = function() {
    main();
}