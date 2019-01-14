let cards = [
	{
		rank: "queen",
		suit: "hearts",
		image: "images/queen-of-hearts.png"
	},
	{
		rank: "queen",
		suit: "diamongss",
		image: "images/queen-of-diamonds.png"
	},
	{
		rank: "king",
		suit: "hearts",
		image: "images/king-of-hearts.png"
	},
	{
		rank: "king",
		suit: "diamonds",
		image: "images/king-of-diamonds.png"
	}
];

let cardsInPlay = [];

let flipCard = function(){
	let cardId = this.getAttribute('data-id');
	this.setAttribute('src',cards[cardId].image);
	cardsInPlay.push(cards[cardId].rank);
	checkForMatch();
}

let checkForMatch = function (){
	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]){
			document.getElementById('result').textContent = "You found a match!";
		}
		else{
			document.getElementById('result').textContent = "Sorry, try again!";
		}
	}
}

let newGame = function(){
	for (i = 0; i < cards.length; i++){
		let cardElement = document.getElementsByTagName('img');
		cardElement[i].setAttribute('src', 'images/back.png');
	}

	for (i = cardsInPlay.length-1; i >= 0; i--){
		cardsInPlay.pop();
	}

	document.getElementById('result').textContent = "";
}

let createBoard = function(){
	for (i = 0; i < cards.length; i++){
		let cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/back.png');
		cardElement.setAttribute('data-id', i);
		cardElement.addEventListener('click',flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
	let reset = document.getElementById('resetButton');
	reset.addEventListener('click',newGame);
}

createBoard();