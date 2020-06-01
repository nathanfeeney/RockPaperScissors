var userScore = 0;
var computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.getElementById(".score-board");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerChoice() {
	const choices = ['r','p','s'];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}

function convertToWord(letter) {
	if(letter == "r") return "Rock";
	if(letter == "p") return "Paper";
	return "Scissors";
}

function win(userChoice, computerChoice) {
	userScore++;
	updateScoreDisplay();
    result_p.innerHTML = `Your ${convertToWord(userChoice)} beats Computer's ${convertToWord(computerChoice)}. You Win!`;
	document.getElementById(userChoice).classList.add('green-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('green-glow') }, 500);
}

function lose(userChoice, computerChoice) {
	computerScore++;
	updateScoreDisplay();
    result_p.innerHTML = `Your ${convertToWord(userChoice)} loses against Computer's ${convertToWord(computerChoice)}. You Lost!`;
	document.getElementById(userChoice).classList.add('red-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('red-glow') }, 500);
}

function draw(userChoice, computerChoice) {
	updateScoreDisplay();
    result_p.innerHTML = `Your ${convertToWord(userChoice)} equals Computer's ${convertToWord(computerChoice)}. Draw!`;
	document.getElementById(userChoice).classList.add('grey-glow');
	setTimeout(function() { document.getElementById(userChoice).classList.remove('grey-glow') }, 500);
}

function updateScoreDisplay() {
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	console.log("computer choice =>" + computerChoice);
	switch (userChoice + computerChoice){
		case "rs":
		case "pr":
		case "sp":
			win(userChoice,computerChoice);
			break;
		case "rp":
		case "ps":
		case "sr":
			lose(userChoice,computerChoice);
			break;
		case "rr":
		case "ss":
		case "pp":
			draw(userChoice,computerChoice);
			break;
	}
}

function main() {
	rock_div.addEventListener('click', function(){
		game("r");
	})
	paper_div.addEventListener('click', function(){
		game("p");
	})
	scissors_div.addEventListener('click', function(){
		game("s");
	})
}

window.onload = function() {
    main();
}