// create word bank array
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

// create other variables
var wins = 0;
var losses = 0;

// computer selects a random word from the word bank array and stores it in a variable
pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(pickedWord);

// create new array of correct number of underscores
function myFunction() {
  var pickedWord = wordBank[Math.floor(Math.random() * wordBank.length)];
  console.log(pickedWord);
  var splitWord = pickedWord.split("");
  console.log(splitWord);

  //document.getElementById("startBtn").addEventListener("click", function() {
  // document.getElementById("caption").innerHTML = "";
  //});

  // get image to change when incorrect letter is selected

  function changeImage() {
    document.getElementById("hangman-image").src = imgs[0];
    imgs.push(imgs.shift());
  }

  //blank spaces appear the length of the word



  //if guess is correct the letter will appear in the word
  //if guess is incorrect select the next image in the sequence of images
  //after a letter is guessed it will not deduct from your number of remaining guesses

  //after guessing all of the letters correctly you win
  //after winning a win is added to your wins column

  //if too many incorrect letters are guessed you lose
  //after losing a loss is added to your losses column

  var buttonRef = document.getElementById("buttons-list");

  buttonRef.addEventListener("click", function(event) {
    function newGame() {
      var remGuesses = 10;
      var wrongLetters = [];
      var correctLetters = [];
    }

    function checkGuess(button) {
      console.dir(button);

      if (
        buttonRef.textContent === 
        // if button.textContent === anything in the pickedWord
        // then run this to add success class

        //document.getElementById("MyElement").classList.add('btn-success')

        button.className += " btn-success";

        document.getElementById("MyElement").classList.add("btn-danger")
      )
        button.className += " btn-danger";

        // function changeImage() {
        //  document.getElementById("hangman-image").src = imgs[0];
        //  imgs.push(imgs.shift());
        // }

        var buttonRef = document.getElementById("buttons-list");

      buttonRef.addEventListener("click", function(event) {
        console.dir(event.target.textContent);
        checkGuess(event.target);
      });
    }
  });
}

//---------------------------------------------------------


var buttonRef = document.getElementById("buttons-list");

function checkGuess(button) {
  // capture event key (letter pressed)

  buttonRef.addEventListener("click", function(event) {
    function letterBtn() {
    
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
  document.getElementById("MyElement").classList.add("btn-success");

  // if placedholderArray.indexOf(guessedLetter) === -1
  if (placeholderArray.indexOf(guessedLetter) === -1) document.getElementById("hangman-image").src = imgs[0];
  imgs.push(imgs.shift())
  document.getElementById("MyElement").classList.add("btn-danger");

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
  )
}}




//----------------------------------------------