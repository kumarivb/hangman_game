$(document).ready(function() {
// furniture options (categotry)
	var wordOpt = ["desk", "couch", "bookshelf", "table", "chair"];
// letter options

// word currently guessing
	var selectedword = "";

// dashes for where the letters go
	var numOflettrsInWord = [];
	var numOfDashes = 0;

// letter guessed


// letters guessed correctly
	var correctLettrsAndDashes = [];

// wrong letters guessed
	var wrongLettrs = [];

// number of guesses left
	var guessesLeftCounter = 15;

// number of wins
	var winCounter = 0;

// number of losses
	var lossCounter = 0;

// display press a letter key to get started
	document.onkeyup = function(event) {
		var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();
		matchLetrs(letterGuessed);
		//console.log("loaded");
	}

// display dashes
	function chooseWord () {
		selectedword = wordOpt[Math.floor(Math.random() * wordOpt.length)];
		//console.log(selectedword);

		numOflettrsInWord = selectedword.split("");
		//console.log(numOflettrsInWord);

		numOfDashes = numOflettrsInWord.lenth;
		//console.log(numOfDashes);
	}	

//	see if letters match or don't match letters in the word
	function matchLetrs(letter) {

		var letrInWord = false;

		for (var i=0; i < numOfDashes; i++) {
			if(selectedword[i] == letter) {
				letrInWord = true;
			}
		}
	
		for (var i=0; i < numOfDashes; i++) {
			if(selectedword[i] == letter) {
				correctLettrsAndDashes[i] == letter;
			}
		}
	}
	
// display letters guessed and dashes
	for (var i=0; i < numOfDashes; i++) {
		correctLettrsAndDashes.push("_");	
		//console.log(correctLettrsAndDashes);
	}
		
// display letters guessed

// display dashes of word to guess
	document.getElementById("dashes").innerHTML = correctLettrsAndDashes.join(" ");

// display number of guesses left
	document.getElementById("GuessesLft").innerHTML = guessesLeftCounter;

// display number of wins
	document.getElementById("winCounter").innerHTML = winCounter;

// display number of losses
	document.getElementById("lossCounter").innerHTML = lossCounter;

// reset
	guessesLeftCounter = 15;
	wrongLettrs = [];
	correctLettrsAndDashes = [];

chooseWord();

});

