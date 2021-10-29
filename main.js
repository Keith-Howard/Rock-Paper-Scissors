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
let userNum = 0;
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

function setComputerPhoto() {
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

rockButton.addEventListener('click', function() {
	setPhoto("images/rock.png", "userImg", userChoice);
	document.getElementById("scissors").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("rock").disabled = true;
	userNum = rock;
	var outcome = document.createElement('p');
	outcome.setAttribute("id", "outcomeMessage");
	computerNum = setComputerPhoto();
	switch (computerNum) {
		case scissors:
			outcome.innerText = '!YOU WON!';
			userWinCount++;
			userWCounter.innerHTML = userWinCount;
			break
		case paper:
			outcome.innerText = '!YOU LOST!';
			computerWinCount++;
			computerWCounter.innerHTML = computerWinCount;
			break
		default:
			outcome.innerText = '!Draw, Nobody Wins!';
			drawCount++;
			drawCounter.innerHTML = drawCount;
	}
	outcomeMessageContainer.appendChild(outcome);
	updateWinPercentageCalculation(userWinCount, computerWinCount, drawCount);
	
})

paperButton.addEventListener('click', function() {
	setPhoto("images/paper.png", "userImg", userChoice);
	document.getElementById("scissors").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("rock").disabled = true;
	userNum = paper;
	var outcome = document.createElement('p');
	outcome.setAttribute("id", "outcomeMessage");
	computerNum = setComputerPhoto();
	switch (computerNum) {
		case scissors:
			outcome.innerText = '!YOU LOST!';
			computerWinCount++;
			computerWCounter.innerHTML = computerWinCount;
			break
		case rock:
			outcome.innerText = '!YOU WON!';
			userWinCount++;
			userWCounter.innerHTML = userWinCount;
			break
		default:
			outcome.innerText = '!Draw, Nobody Wins!';
			drawCount++;
			drawCounter.innerHTML = drawCount;
	}
	outcomeMessageContainer.appendChild(outcome);
	updateWinPercentageCalculation(userWinCount, computerWinCount, drawCount);
})

scissorsButton.addEventListener('click', function() {
	setPhoto("images/scissors.png", "userImg", userChoice);
	document.getElementById("scissors").disabled = true;
	document.getElementById("paper").disabled = true;
	document.getElementById("rock").disabled = true;
	userNum = scissors;
	var outcome = document.createElement('p');
	outcome.setAttribute("id", "outcomeMessage");
	computerNum = setComputerPhoto();
	switch (computerNum) {
		case paper:
			outcome.innerText = '!YOU WON!';
			userWinCount++;
			userWCounter.innerHTML = userWinCount;
			break
		case rock:
			outcome.innerText = '!YOU LOST!';
			computerWinCount++;
			computerWCounter.innerHTML = computerWinCount;
			break
		default:
			outcome.innerText = '!Draw, Nobody Wins!';
			drawCount++;
			drawCounter.innerHTML = drawCount;
	}
	outcomeMessageContainer.appendChild(outcome);
	updateWinPercentageCalculation(userWinCount, computerWinCount, drawCount);
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
 