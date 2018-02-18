// DECLARE VARIABLES
// wordBank Array
var wordBank = [
  "corgi",
  "pug",
  "retriever",
  "bulldog",
  "husky",
  "akita",
  "boxer",
  "pitbull",
  "maltese",
  "rottweiler",
  "beagle",
  "labrador",
  "dachshund",
  "chihuahua",
  "chow",
  "vizsla",
  "collie",
  "shepherd",
  "newfoundland",
  "malamute",
  "hound",
  "terrier"
];

var imgs = [
  "./assets/images/hangman-1.png",
  "./assets/images/hangman-2.png",
  "./assets/images/hangman-3.png",
  "./assets/images/hangman-4.png",
  "./assets/images/hangman-5.png",
  "./assets/images/hangman-6.png"
];

// any references to HTML DOM Elements (reset button, area for writing stats, letter blanks)
// wins/losses
var wins = 0;
var losses = 0;
var guesses = 6;
var pickedWordPlaceholder = [];
var guessedLetters = [];
var pickedWordArray = [];
var pickedWord = "";

// NEW GAME FUNCTION
document.getElementById("start-button").addEventListener("click", newGame);
function newGame() {
  // reset guessesLeft to 6
  document.getElementById("hangman-image").src =
    "./assets/images/hangman-start.png";
  guesses = 6;
  document.getElementById("guesses-remaining").textContent = guesses;
  // declare/reset pickedWord Placeholder array
  pickedWordPlaceholder = [];

  // array for guessedLetters
  guessedLetters = [];

  document.getElementById("picked-word").textContent = "";
  resetButtons();

  // pick our word at random from the wordBank
  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  //console.log(pickedWord); //randomly picked word from wordBank

  // split pickedWord into an array
  pickedWordArray = pickedWord.split("");

  // for loop over pickedWordArray, at each iteration, check IF pickedWordArray[i] === " ", then push in a " " to pickedWordPlaceholder, else push a "_"
  for (i = 0; i < pickedWordArray.length; i++) {
    if (pickedWordArray[i] === " ") {
      pickedWordPlaceholder.push(" ");
    } else {
      pickedWordPlaceholder.push("_");
    }
  }
  var joinedPlaceholder = pickedWordPlaceholder.join(" ");
  // write placeholder array to DOM
  document.getElementById("picked-word").innerHTML = joinedPlaceholder;
}

//--------------------------------

var buttonRef = document.getElementById("buttons-list");

buttonRef.addEventListener("click", function(event) {
  // event.target will be the particular button you clicked
  // console.dir(event.target);
  var buttonClicked = event.target;
  // execute checkGuess function and pass in the button you selected (will be handled above)
  if (buttonClicked.nodeName === "BUTTON") {
    checkGuess(buttonClicked);
  }
});

//---------------------------------
var buttonRef = document.getElementById("buttons-list");

function checkGuess(button) {
  // capture event key (letter pressed)
  // console.dir(button);

  //the letter guessed is equal to the text content of the button clicked
  var letterGuessed = button.textContent.toLowerCase();

  //check to see if the letter guessed is present in the pickedWord
  //push this letter into the letterGuessed array

  //if the letter is present in the word then push it into the placeholder array
  //change the class of the button pressed to btn-success

  //write the letter to the dom in the correct location
  //if the letter isn't in the word then change the button class to btn-danger
  //switch to the next image in the images array

  // -1 remaining guesses
  // once zero guesses remaining then you lose
  //once the placeholder array matches the pickedWord you win

  // if (guessedLetters.indexOf(letterGuessed) === -1)
  if (guessedLetters.indexOf(letterGuessed) === -1) {
    // Run rest of game
    // push guessedLetter into guessedLetters array
    guessedLetters.push(letterGuessed);

    for (i = 0; i < pickedWordArray.length; i++) {
      // if guessedLetter === arr[i]
      if (letterGuessed === pickedWordArray[i]) {
        // replace placeholder[i] with guessedLetter
        pickedWordPlaceholder[i] = letterGuessed;
        // console.log(pickedWordPlaceholder);
        button.classList.add("btn-success");
      }
    }
    if (pickedWordPlaceholder.indexOf(letterGuessed) === -1) {
      button.classList.add("btn-danger");
      guesses--;
      document.getElementById("guesses-remaining").textContent = guesses;
    }
    document.getElementById("picked-word").innerHTML = pickedWordPlaceholder.join(" ");
    if (guesses === 0) {
      losses++;
      document.getElementById("losses").textContent = losses;
      // you lose
    }
    if (pickedWordPlaceholder.join("") === pickedWordArray.join("")) {
      wins++;
      document.getElementById("wins").textContent = wins;
      // you win
    }
    if (guesses === 5) {
      document.getElementById("hangman-image").src =
        "./assets/images/hangman-1.png";
    }
    if (guesses === 4) {
      document.getElementById("hangman-image").src =
        "./assets/images/hangman-2.png";
    }
    if (guesses === 3) {
      document.getElementById("hangman-image").src =
        "./assets/images/hangman-3.png";
    }
    if (guesses === 2) {
      document.getElementById("hangman-image").src =
        "./assets/images/hangman-4.png";
    }
    if (guesses === 1) {
      document.getElementById("hangman-image").src =
        "./assets/images/hangman-5.png";
    }
    if (guesses === 0) {
      document.getElementById("hangman-image").src =
        "./assets/images/hangman-6.png";
    }
  }
}

//----------------------------------------

function resetButtons() {
  var letterButtons = document.getElementsByClassName("button-class");
  //console.log("hit");
  for (var i = 0; i < letterButtons.length; i++) {
    letterButtons[i].classList.remove("btn-success");
    letterButtons[i].classList.remove("btn-danger");
  }
}
// reset GAME FUNCTION
document.getElementById("reset-button").addEventListener("click", newGame);

newGame();
