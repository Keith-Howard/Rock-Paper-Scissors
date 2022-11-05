let rockButton = document.getElementById('rock');
let paperButton = document.getElementById('paper');
let scissorsButton = document.getElementById('scissors');
let newGameButton = document.getElementById('newGame');
let userChoice = document.getElementById('userChoice');
let computerChoice = document.getElementById('computerChoice');
let outcomeMessageContainer = document.getElementById('outcomeMessageContainer');
let choiceButtons = document.querySelectorAll('choiceButton');
let userWCounter = document.getElementById('userWon');
let computerWCounter = document.getElementById('computerWon');
let drawCounter = document.getElementById('draws');
let userWinPercentage = document.getElementById('userWinPercentage')
let resetCountersButton = document.getElementById('resetCountersButton');
let computerNum = 0;
const scissors = 1;
const paper = 2;
const rock = 3;
let userWinCount = 0;
let computerWinCount = 0;
let drawCount = 0;

computerWCounter.innerHTML = computerWinCount;
userWCounter.innerHTML = userWinCount;
drawCounter.innerHTML = drawCount;
userWinPercentage.innerHTML = 0;


function updateWinPercentageCalculation(userWins, computerWins, draws) {
	var winPercentage = (userWins / (userWins + computerWins + draws)) * 100;
	userWinPercentage.innerHTML = winPercentage.toFixed(2);
}

function setPhoto(imgSource, elementIdName, htmlElement) {
	var img = document.createElement("img");
	img.setAttribute("id", elementIdName);
	img.src = imgSource;
	htmlElement.appendChild(img);
}

function setComputerNumAndPhoto() {
	computerNum = Math.floor(Math.random() * 3) + 1;
	switch (computerNum) {
		case scissors:
			setPhoto("images/scissors.png", "compImg", computerChoice);
			break;
		case paper:
			setPhoto("images/paper.png", "compImg", computerChoice);
			break;
		default:
			setPhoto("images/rock.png", "compImg", computerChoice);
			}
	return computerNum
}

function usersChoice(usersChoiceNum, userChoiceString) {
	setPhoto("images/" + userChoiceString + ".png", "userImg", userChoice);
	document.getElementById("scissors").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("rock").disabled = true;
	var outcome = document.createElement('p');
	outcome.setAttribute("id", "outcomeMessage");
	computerNum = setComputerNumAndPhoto();
	if (usersChoiceNum === paper && computerNum === rock || 
		usersChoiceNum === rock && computerNum === scissors || 
		usersChoiceNum === scissors && computerNum === paper) {
		outcome.innerText = '!YOU WON!';
		userWinCount++;
		userWCounter.innerHTML = userWinCount;
	} else if (usersChoiceNum === computerNum) {
		outcome.innerText = '!Draw, Nobody Wins!';
		drawCount++;
		drawCounter.innerHTML = drawCount;
	} else {
		outcome.innerText = '!YOU LOST!';
		computerWinCount++;
		computerWCounter.innerHTML = computerWinCount;
	}
	outcomeMessageContainer.appendChild(outcome);
	updateWinPercentageCalculation(userWinCount, computerWinCount, drawCount);
}

rockButton.addEventListener('click', function() {
	usersChoice(rock, 'rock');
})

paperButton.addEventListener('click', function() {
	usersChoice(paper, 'paper');
})

scissorsButton.addEventListener('click', function() {
	usersChoice(scissors, 'scissors');
})

newGameButton.addEventListener('click', function() {
	var userImg = document.getElementById('userImg');
	var compImg = document.getElementById('compImg');
	var gameResult = document.getElementById('outcomeMessage');
	document.getElementById("rock").disabled = false;
	document.getElementById("paper").disabled = false;
	document.getElementById("scissors").disabled = false;
	userChoice.removeChild(userImg);
	computerChoice.removeChild(compImg);
	outcomeMessageContainer.removeChild(gameResult);
})

resetCountersButton.addEventListener('click', function() {
	userWinCount = 0;
	userWCounter.innerHTML = userWinCount;
	computerWinCount = 0;
	computerWCounter.innerHTML = computerWinCount;
	drawCount = 0;
	drawCounter.innerHTML = drawCount;
	userWinPercentage.innerHTML = 0
})
 