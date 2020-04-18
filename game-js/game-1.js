var choices = ["paper", "rock", "scissor"];
var i = Math.floor(Math.random() * 3);
var comChoice = choices[i];
var userPoints = 0;
var comPoints = 0;

function score() {
	var score_div = document.getElementById('score').innerHTML = userPoints + " - " + comPoints;
}

setInterval(score, 50);

function convert(word) {
	if (word === "paper") return '<i class="far fa-hand-paper"></i>';
	if (word === "rock") return '<i class="far fa-hand-rock"></i>';
	return '<i class="far fa-hand-scissors"></i>';
}

function game(userChoice) {
	var box = document.getElementById('challenge');
	box.style.display = "inline-flex";
	var userDiv = document.getElementById('yourObject');
	userDiv.innerHTML = convert(userChoice);
	var comDiv = document.getElementById('katyObject');
	comDiv.innerHTML = convert(comChoice);

	if (userChoice === "paper" && comChoice === "rock" ||
		userChoice === "rock" && comChoice === "scissor" ||
		userChoice === "scissor" && comChoice === "paper") {
		win(userChoice);
	} else if (userChoice === comChoice) {
		draw(userChoice);
	} else {
		lose(userChoice);
	}
	function continuedGame() {
		i = Math.floor(Math.random() * 3);
		comChoice = choices[i];
		box.style.display = "none";
	}
	setTimeout(continuedGame, 1200);
}

function win(bn) {
	userPoints++;
	document.getElementById('who').innerHTML = "You win!";
	var mm = document.getElementById(bn);
	mm.classList.remove("bn");
	mm.classList.add("green");
	setTimeout(() => {
		mm.classList.add("bn");
		mm.classList.remove("green");
	}, 1200);
}
function draw(bn) {
	document.getElementById('who').innerHTML = "It's a Draw";
	var mm = document.getElementById(bn);
	mm.classList.remove("bn");
	mm.classList.add("green");
	setTimeout(() => {
		mm.classList.add("bn");
		mm.classList.remove("green");
	}, 1200);
}
function lose(bn) {
	comPoints++;
	document.getElementById('who').innerHTML = "You lose";
	var mm = document.getElementById(bn);
	mm.classList.remove("bn");
	mm.classList.add("red");
	setTimeout(() => {
		mm.classList.add("bn");
		mm.classList.remove("red");
	}, 1200);
}