var words = ["newyork", "developer", "javascript", "stamford", "vancouver", "california",];


var word = '';

var guessedWord = [];
var guessesLeft = 0;

var lettersGuessed = '';
var guessedString = '';

var wins = 0;
var popupImage = true;


function startGame() {
    word = words[Math.floor(Math.random() * words.length)].toUpperCase();
    guessedWord = [];
    for (var i = 0; i < word.length; i++) {
        guessedWord[i] = "_";
        guessedString = guessedString + "_";
    }
    document.querySelector("#guess").innerHTML = guessedString;
    guessesLeft = 10;
    document.querySelector("#guesses").innerHTML = wins;
    lettersGuessed = '';
    console.log("Word has been selected: " + word);
    if (popupImage) {
        document.getElementById("img").src = "assets/images/hangman-1.jpg";
    }
}

function guessLetter(letter) {
    if (!popupImage) {
        document.getElementById("img").src = "assets/images/hangman-1.jpg";
        popupImage = true;
    }
    letter = letter.toUpperCase();
    if (lettersGuessed.includes(letter)) {
        return;
    }
    if (letter === "SPACE") {
        letter = ' ';
    }
    var guess = false;
    for (var i = 0; i < word.length; i++) {
        if (word.charAt(i) === letter) {
            guessedWord[i] = letter;
            console.log("You guessed a letter!");
            guess = true;
        }
    }
    guessedString = '';
    for (var i = 0; i < guessedWord.length; i++) {
        guessedString = guessedString + guessedWord[i];
    }
    document.querySelector("#guess").innerHTML = guessedString;
    lettersGuessed = lettersGuessed + letter + ", ";
    document.querySelector("#letters").innerHTML = lettersGuessed;
    console.log(guessedString);
    if (word === guessedString) {
        if (word === "california") {
            guessesLeft = 10;
        }

        document.getElementById("img").src = "assets/images/" + word + ".jpg";
        guessedString = '';
        document.querySelector("#guess").innerHTML = guessedString;
        updateImage = false;
        //alert("You guessed the word!");
        startGame();
        wins++;
        document.querySelector("#wins").innerHTML = wins;
    } else {
        if (!guess) {
            guessesLeft--;
            if (guessesLeft === 9) {
                document.getElementById("img").src = "assets/images/hangman-1.jpg";
            } else if (guessesLeft === 8) {
                document.getElementById("img").src = "assets/images/hangman-2.jpg";
            } else if (guessesLeft === 7) {
                document.getElementById("img").src = "assets/images/hangman-3.jpg";
            } else if (guessesLeft === 6) {
                document.getElementById("img").src = "assets/images/hangman-4.jpg";
            } else if (guessesLeft === 5) {
                document.getElementById("img").src = "assets/images/hangman-5.jpg";
            } else if (guessesLeft === 4) {
                document.getElementById("img").src = "assets/images/hangman-6.jpg";
            } else if (guessesLeft === 3) {
                document.getElementById("img").src = "assets/images/hangman-7.jpg";
            } else if (guessesLeft === 2) {
                document.getElementById("img").src = "assets/images/hangman-8.jpg";
            } else if (guessesLeft === 1) {
                document.getElementById("img").src = "assets/images/hangman-9.jpg";
            } else if (guessesLeft === 0) {
                document.getElementById("img").src = "assets/images/hangman-10.jpg";
            }
            document.querySelector("#guesses").innerHTML = guessesLeft;
            console.log("You guessed a incorrect letter!")
            if (guessesLeft === 0) {
                popupImage = false;
                //alert("You ran out of guesses!");
                startGame();
            }
        }
    }
}
