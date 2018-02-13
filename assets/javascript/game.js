// make an array of possible word choices

// create variables
// var wins = 0;
// var losses = 0;

// Randomly chooses a choice from the options array. This is the Computer's guess.

// var computerGuess =
// computerChoices[Math.floor(Math.random() * computerChoices.length)];

// document.getElementById("demo").innerHTML = "Hello JavaScript";

//window opens

//click to start game

// assign variables

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


randomChoice = wordBank[Math.floor(Math.random() * wordBank.length)];
console.log(randomChoice);

// create new array of correct number of underscores

//document.getElementById("startBtn").addEventListener("click", function() {
// document.getElementById("caption").innerHTML = "";
//});

//if (random.equals("corgi")) {
//  document.getElementById("caption").innerHTML = "_ _ _ _ _";
//} else if (random.equals("pug")) {
// document.getElementById("caption").innerHTML = "_ _ _";
//}

//computer chooses random word from array

//blank spaces appear the length of the word

//press a letter key to guess a letter

//if guess is correct the letter will appear in the word
//if guess is incorrect select the next image in the sequence of images
//after a letter is guessed it will not deduct from your number of remaining guesses

//after guessing all of the letters correctly you win
//after winning a win is added to your wins column

//if too many incorrect letters are guessed you lose
//after losing a loss is added to your losses column
