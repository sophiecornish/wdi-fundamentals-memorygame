//create an array to store all cards
var cards = ["queen", "queen", "king", "king"];

//create an array to store all cards
var cardsInPlay = [];

//create a variable cardOne & store the first item in the cards array in the variable cardOne
var cardOne = cards[0];

//add the first card to the cards in play array 
cardsInPlay.push('cardOne');

//Use console.log() to display the card that the user flipped cardOne
console.log("User flipped" + cardOne);

//create a variable cardTwo & store the third item in the card array in the variable cardTwo
var cardTwo = cards[2]

//add the second card to the cards in play array
cardsInPlay.push('cardTwo');

// use console.log() to display user flipped cardTwo
console.log("User flipped" + cardTwo);

//check array length of cardsInPlay to ensure 2 cards have been played 
if (cardsInPlay.length === 2) {

	//check for equality of cards in cardsInPlay array
	if (cardsInPlay[0] === cardsInPlay[1]) {
		//alert user with results
		alert("You found a match!");
	} else { 
		alert("Sorry, try again!");
}
}