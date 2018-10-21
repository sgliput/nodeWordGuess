var Word = require("./word.js");
var inquirer = require("inquirer");

//array of potential films
var potentialFilms = ["Inception", "Primer", "Surrogates", "Aliens", "Serenity", "Signs", "Starman", "Spaceballs", "Gravity", "Arrival", "Akira", "Coma", "Innerspace", "Elysium", "Looper", "Tron", "Dune", "Avatar", "Interstellar", "Prometheus", "Skyline", "Brazil", "Westworld", "Sunshine", "Cloverfield", "Knowing", "Zathura", "Existenz", "Predator", "Frequency"];

//randomly selected movie
var movie = potentialFilms[Math.floor(Math.random() * potentialFilms.length)];
var movieArray = movie.split("");

var hidWord = new Word(movie);

var guesses = 10;
var rightLetter;

//intro message and initial blank word
console.log(`
  Welcome to the Movie Guess Node Game.
  Type a letter to fill in the blanks for the random one-word sci-fi movie hidden below.
  
  ${hidWord.reveal()}
  `);

var fillIn = function () {
    //if the whole movie is not guessed and the number of guesses has not run out
    if (hidWord.reveal() !== movie && guesses > 0) {

        inquirer
            .prompt([
                {
                    type: "input",
                    name: "letterInput",
                    message: "Guess a letter!"
                }
            ])
            .then(function (answer) {
                var letter = answer.letterInput;
                hidWord.compareWord(letter);

                //checks if the movie contains the letter typed
                for (var g = 0; g < movieArray.length; g++) {
                    if (letter.toLowerCase() == movieArray[g].toLowerCase()) {
                        rightLetter = true;
                    }
                }
                //reminder message logs if player types more than one letter
                if(!rightLetter && letter.length > 1){
                    console.log("\nYou must input a single letter.\n");
                //message for wrong letter and number of guesses decreases
                } else if (!rightLetter) {
                    console.log("\nSorry, not that letter.");
                    guesses--;
                    console.log("Guesses left: " + guesses + "\n");
                //message for correct letter and updated word is shown
                } else {
                    console.log("\n" + hidWord.reveal() + "\n");
                    rightLetter = false;
                }
                //recursive function is called at the end
                fillIn();
            });
        //if the movie has not been guessed and the guesses have run out
    } else if (hidWord.reveal() !== movie && guesses === 0) {
        console.log("------------------");
        console.log("Sorry, you ran out of guesses!");
        console.log("The movie was " + movie + ".");
        //if all the movie's letters are successfuly filled in
    } else {
        console.log("------------------");
        console.log("The movie is " + hidWord.reveal() + ".");
        console.log("Congratulations! You won!");
    }
}

fillIn();