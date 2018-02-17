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
var wins = [];
var losses = [];
var guesses = 6;
var pickedWordPlaceHolder = [];
var guessedLetters = [];
var pickedWordArray = [];
var pickedWord = "";

// NEW GAME FUNCTION
document.getElementById("start-button").addEventListener("click", newGame);
function newGame() {
  // reset guessesLeft to 6
  guesses = 6;
  // declare/reset pickedWord Placeholder array
  pickedWordPlaceholder = [];

  // array for guessedLetters
  guessedLetters = [];
  // clear out existing DOM content from previous game

  // pick our word at random from the wordBank
  pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(pickedWord); //randomly picked word from wordBank

  // split pickedWord into an array
  pickedWordArray = pickedWord.split("");

  // for loop over pickedWordArray, at each iteration, check IF pickedWordArray[i] === " ", then push in a " " to pickedWordPlaceholder, else push a "_"
  for (i = 0; i < pickedWordArray.length; i++) {
    if (pickedWordArray[i] === " ") pickedWordPlaceholder.push(" ");
    else pickedWordPlaceholder.push("_");
  }
  var joinedPlaceholder = pickedWordPlaceholder.join(" ");
  // write placeholder array to DOM
  document.getElementById("picked-word").innerHTML = joinedPlaceholder;
}

//--------------------------------

var buttonRef = document.getElementById("buttons-list");

buttonRef.addEventListener("click", function(event) {
  // event.target will be the particular button you clicked
  console.log(event.target);
  var buttonClicked = event.target;
  // execute checkGuess function and pass in the button you selected (will be handled above)
  checkGuess(buttonClicked);
});

//---------------------------------
var buttonRef = document.getElementById("buttons-list");

function checkGuess(button) {
  // capture event key (letter pressed)
  console.dir(button);
  var buttonPicked = button;
  guessedLetters = [];

//the letter guessed is equal to the text content of the button clicked
  var letterGuessed = button.textContent;

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
  if (letterGuessed.indexOf(letterGuessed) === -1) {
    
      // Run rest of game
      // push guessedLetter into guessedLetters array
      letterGuessed.push(letterGuessed);
      console.log(letterGuessed);
    }
    // loop over pickedWordArray
    for (i = 0; i < pickedWordArray.length; i++) {
      // if guessedLetter === arr[i]
      if (guessedLetters === pickedWordArray[i]) {
        // replace placeholder[i] with guessedLetter
        pickedWordPlaceholder[i].push(guessedLetters);
      
      document.getElementById("picked-word").innerHTML = pickedWordArray
      }
    }
  };

//----------------------------------------

function resetButtons() {
  var letterButtons = document.getElementsByClassName("button-class");

  for (var i = 0; i < letterButtons.length; i++) {
    letterButtons[i].classList.remove("btn-success");
    letterButtons[i].classList.remove("btn-danger");
  }
}
// reset GAME FUNCTION
document.getElementById("reset-button").addEventListener("click", resetGame);

function resetGame() {
  // reset guessesLeft to 6
  // declare/reset pickedWord Placeholder array
  var pickedWordPlaceholder = [];

  // array for guessedLetters
  var guessedLetters = [];

  var wins = [];
  var losses = [];
}
