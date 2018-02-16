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
  // reset guessesLeft to 10
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
  };

  // write placeholder array to DOM
  document.getElementById("picked-word").innerHTML = pickedWordPlaceholder;
 
    // capture event key (letter pressed)
    var buttonRef = document.getElementById("buttons-list");

    buttonRef.addEventListener("click", function(event) {
      function letterButton() {
      
    // if (guessedLetters.indexOf(letterGuessed) === -1)
    if (guessedLetters.indexOf(letterGuessed) === -1);

    // Run rest of game
    // push guessedLetter into guessedLetters array
    for (i = 0; i < pickedWordArray.length; i++) {
      if (guessedLetter[i] === arr[i]) pickedWordPlaceholder.push(guessedLetter);

      else pickedWordPlaceholder.push("_");
    
    // loop over pickedWordArray
    for (i = 0; i < pickedWordArray.length; i++) {
    // if guessedLetter === arr[i]
    if (guessedLetter === arr[i]) 
    // replace placeholder[i] with guessedLetter
    placeholder[i].push(guessedLetter);
    // if placedholderArray.indexOf(guessedLetter) === -1
    if (placeholderArray.indexOf(guessedLetter) === -1) document.getElementById("hangman-image").src = imgs[0];
    imgs.push(imgs.shift())
    // then it's a wrong guess
    
    
    // decrement guessesLeft
    guessesLeft --;
    // check guessesLeft up against 0
    if (guessesLeft === 0);
    // if yes, you lose
    alert("you lose!");
    // check to see if placeholderArray.join('') === pickedWordArray.join('')
    if (placeholderArray.join(" ") === pickedWordArray.join(" "));
    // if yes, you win!
    alert("you win!");
    // else alert / write to DOM that user already guessed that letter
    else; {
    (alert("you already guessed that letter")
  };)
    })}
