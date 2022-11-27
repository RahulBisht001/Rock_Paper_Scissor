// Java script for rock paper scissor game

const totalScore = {
	computerScore: 0,
	PlayerScore: 0,
};

/* 
Function for the Computer's Choice 
it is Totally Random
*/
function getComputerChoice() {
	const rpsChoice = ["Rock", "Paper", "Scissor"];
	const randomChoice = Math.floor(Math.random() * 3);
	return rpsChoice[randomChoice];
}

/*  
Function for calculating the winner 
all Conditions are written below
*/
function getResult(playerChoice, computerChoice) {
	let score;

	if (playerChoice == computerChoice) {
		score = 0;
	} //   Human Win Situations
	else if (playerChoice == "Rock" && computerChoice == "Scissor") {
		score = 1;
	} else if (playerChoice == "Paper" && computerChoice == "Rock") {
		score = 1;
	} else if (playerChoice == "Scissor" && computerChoice == "Paper") {
		score = 1;
	} else {
		score = -1;
	}
	return score;
}
/*
THis is the function where we are Performing DOM Manipulation
every changes that are are made by java script will reflect because of this function
*/
function showResult(score, playerChoice, computerChoice) {
	// Code
	const upperMsg = document.getElementById("upperMsg");
	const p_move = document.getElementById("p_move");
	const c_move = document.getElementById("c_move");
	const num = document.getElementById("score");

	//  upper msg will change accordingly
	num.innerHTML = `${totalScore["PlayerScore"]}
	: ${totalScore["computerScore"]}`;
	p_move.innerText = `Your Move : ${playerChoice}`;
	c_move.innerText = `Bot's Move :${computerChoice}`;

	if (score == -1) {
		upperMsg.innerText = " You Loose !🥲";
	} else if (score == 0) {
		upperMsg.innerText = " It's a Tie 😂";
	} else {
		upperMsg.innerText = " You Won 🥳🍾";
	}
}

/*
 Function to see that what the user choose
*/
function onClickRPS(playerChoice) {
	// Keeping track of score of players
	const computerChoice = getComputerChoice();
	const score = getResult(playerChoice, computerChoice);
	if (score != 0) {
		// when their is not a tie
		if (score == 1) {
			totalScore["PlayerScore"] += 1;
		} else {
			totalScore["computerScore"] += 1;
		}
	}
	showResult(score, playerChoice, computerChoice);
}

function endGame() {
	/*
    Ending / reset the Game
     endGame function clears all the text on the DOM 
    */
}

function main() {
	const r = document.getElementById("rock");
	const p = document.getElementById("paper");
	const s = document.getElementById("scissor");

	r.onclick = function () {
		onClickRPS("Rock");
	};

	p.onclick = function () {
		onClickRPS("Paper");
	};

	s.onclick = function () {
		onClickRPS("Scissor");
	};
}

main();
