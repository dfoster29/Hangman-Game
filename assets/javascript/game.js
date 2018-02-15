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

// creat other variables
var wins = 0;
var losses = 0;

// computer selects a random word from the word bank array and stores it in a variable
wordChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(wordChoice);

// create new array of correct number of underscores

//document.getElementById("startBtn").addEventListener("click", function() {
// document.getElementById("caption").innerHTML = "";
//});

//if (random.equals("corgi")) {
//  document.getElementById("caption").innerHTML = "_ _ _ _ _";
//} else if (random.equals("pug")) {
// document.getElementById("caption").innerHTML = "_ _ _";
//}

// get image to change when incorrect letter is selected
var imgs = [
  "./assets/images/hangman-1.png",
  "./assets/images/hangman-2.png",
  "./assets/images/hangman-3.png",
  "./assets/images/hangman-4.png",
  "./assets/images/hangman-5.png",
  "./assets/images/hangman-6.png"
];

function changeImage() {
  document.getElementById("hangman-image").src = imgs[0];
  imgs.push(imgs.shift());
}

//blank spaces appear the length of the word

//press a letter key to guess a letter

//if guess is correct the letter will appear in the word
//if guess is incorrect select the next image in the sequence of images
//after a letter is guessed it will not deduct from your number of remaining guesses

//after guessing all of the letters correctly you win
//after winning a win is added to your wins column

//if too many incorrect letters are guessed you lose
//after losing a loss is added to your losses column

function newGame() {
  var remGuesses = 10;
  var wrongLetters = [];
  var correctLetters = [];
}
