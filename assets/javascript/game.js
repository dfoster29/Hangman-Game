// make an array of possible word choices
var randomWord = [
  "corgi",
  "pug",
  "golden retriever",
  "french bulldog",
  "siberian husky",
  "akita",
  "boxer",
  "pitbull",
  "maltese",
  "rottweiler",
  "beagle",
  "great dane",
  "dachshund",
  "chihuahua",
  "chow chow",
  "vizsla",
  "border collie",
  "australian shpepherd",
  "newfoundland",
  "great pyrenees",
  "basset hound",
  "boston terrier"
];

// create variables
var wins = 0;
var losses = 0;

// Randomly chooses a choice from the options array. This is the Computer's guess.
var computerGuess =
  computerChoices[Math.floor(Math.random() * computerChoices.length)];

document.getElementById("demo").innerHTML = "Hello JavaScript";


//window opens

//click to start game

//computer chooses random word from array

//blank spaces appear the length of the word

//press a letter key to guess a letter

//if guess is correct the letter will appear in the word
//if guess is incorrect the letter will appear in a list of guessed letters
//after a letter is guessed it will not deduct from your number of remaining guesses

//after guessing all of the letters correctly you win
//after winning a win is added to your wins column

//if too many incorrect letters are guessed you lose
//after losing a loss is added to your losses column



