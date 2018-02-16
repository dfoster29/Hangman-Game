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

// NEW GAME FUNCTION
document.getElementById("start-button").addEventListener("click", newGame);
function newGame() {
  // reset guessesLeft to 6
  // declare/reset pickedWord Placeholder array
  var pickedWordPlaceholder = [];

  // array for guessedLetters
  var guessedLetters = [];
  // clear out existing DOM content from previous game

  // pick our word at random from the wordBank
  var pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(pickedWord); //randomly picked word from wordBank

  // split pickedWord into an array
  var pickedWordArray = pickedWord.split("");

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

function checkGuess(buttonEventObject) {
  // this is referencing the whole button object (so you can add classes to it whether it's right or wrong)
  console.dir(buttonEventObject);
  var guessedLetter = buttonEventObject.textContent;
  // run logic to check for correct or incorrect
}

var buttonRef = document.getElementById("buttons-list");

buttonRef.addEventListener("click", function(event) {
  // event.target will be the particular button you clicked
  console.log(event.target);

  // execute checkGuess function and pass in the button you selected (will be handled above)
  checkGuess(event.target);
});

//---------------------------------
var buttonRef = document.getElementById("buttons-list");

function checkGuess(button) {
  // capture event key (letter pressed)

  buttonRef.addEventListener("click", function(event) {
    function newGame() {
      var letterChoice = buttonRef.textContent;
      // if (guessedLetters.indexOf(letterGuessed) === -1)
      if (letterChoice.indexOf(letterGuessed) === -1);

      // Run rest of game
      // push guessedLetter into guessedLetters array
      for (i = 0; i < pickedWordArray.length; i++) {
        if (letterChoice[i] === arr[i])
          pickedWordPlaceholder.push(letterChoice);
        else pickedWordPlaceholder.push("_");

        // loop over pickedWordArray
        for (i = 0; i < pickedWordArray.length; i++) {
          // if guessedLetter === arr[i]
          if (letterChoice === arr[i])
            // replace placeholder[i] with guessedLetter
            placeholder[i].push(letterChoice);
        }}};

        //----------------------------------------

        function resetButtons() {
          var letterButtons = document.getElementsByClassName("button-class");

          for (var i = 0; i < letterButtons.length; i++) {
            letterButtons[i].classList.remove("btn-success");
            letterButtons[i].classList.remove("btn-danger");
          };

          // reset GAME FUNCTION
          document
            .getElementById("reset-button")
            .addEventListener("click", resetGame);
          function resetGame() {
            // reset guessesLeft to 6
            // declare/reset pickedWord Placeholder array
            var pickedWordPlaceholder = [];

            // array for guessedLetters
            var guessedLetters = [];

            var wins = [];
            var losses = [];
          }
        }
      })
    }