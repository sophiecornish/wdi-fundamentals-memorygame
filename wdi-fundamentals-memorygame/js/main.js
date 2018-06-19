// create four objects, one for each card.
var cards = [

{
	rank: 'queen',
	suit: 'hearts',
	cardImage: 'images/queen-of-hearts.png'
},
{
	rank:'queen',
	suit: 'diamonds',
	cardImage: 'images/queen-of-diamonds.png'
},

	{rank: 'king',
	suit: 'hearts',
	cardImage: 'images/king-of-hearts.png'
},

{
	rank: 'king',
	suit: 'diamonds',
	cardImage: 'images/king-of-diamonds.png'
}
];

//create an array to store all cards in play
var cardsInPlay = [];

	//create a function to check if the cards are equal
	var checkForMatch = function() {
	//check to see if cards are equal
	if (cardsInPlay[0]=== cardsInPlay[1]) {
		console.log("You found a match!");
	} else {
		console.log("Sorry, try again.");
	}
	};

	//create a function to store all steps that should happen when a user flips a card
		var flipCard = function (cardId) {
	//display card was flipped over
	console.log("User flipped " + cards[cardId].rank);
	//add card user flipped to cardsInPlay array
	cardsInPlay.push(cards[cardId].rank);

	//show card image
	console.log(cards[cardId].cardImage)

	//show card suit
	console.log(cards[cardId].suit) 

	//check array length of cardsInPlay to ensure 2 cards have been played 
	if (cardsInPlay.length === 2) {

	//if true, call check for match
	checkForMatch();
	}
	};


//create a function called createBoard

var createBoard = function() {

	//Within the createBoard function, use a for loop to loop through the cards array.
	for (var i = 0; i < cards.length; i++) {



	//use the createElement method to create an img element and store it in a variable cardElement.
	var cardElement = document.createElement('image');


	//set the src attribute to show the back of the card
	cardElement.setAttribute('src', 'images/back.png');

	// set the data-id attribute to be the index of the current element
	cardElement.setAttribute('data-id', i);

	//add event listener to listen for click
	cardElement.addEventListener(click, 'flipCard');

	//use the appendChild() method to append the current card element to the game board
	document.getElementById('game-board').appendChild(cardElement);


	}	
}

//invoke create board function

createBoard();
 

