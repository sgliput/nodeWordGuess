var Word = require("./word.js");
var inquirer = require("inquirer");

var potentialFilms = ["Inception", "Primer", "Surrogates", "Aliens", "Serenity", "Signs", "Starman", "Spaceballs", "Gravity", "Arrival", "Akira", "Coma", "Innerspace", "Elysium", "Looper", "Tron", "Dune", "Avatar", "Interstellar", "Prometheus", "Skyline", "Brazil", "Westworld", "Sunshine", "Cloverfield", "Knowing", "Zathura", "Existenz", "Predator", "Frequency"];

var movie = potentialFilms[Math.floor(Math.random() * potentialFilms.length)];
var movieArray = movie.split("");

var hidWord = new Word(movie);

//console.log(hidWord.word);
var guesses = 10;
var rightLetter;
console.log(`
  Welcome to the Movie Guess Node Game.
  Type a letter to fill in the blanks for the random one-word sci-fi movie hidden below.`)
console.log("\n" + hidWord.reveal() + "\n");

var fillIn = function () {
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

                for (var g = 0; g < movieArray.length; g++) {
                    if (letter.toLowerCase() == movieArray[g].toLowerCase()) {
                        rightLetter = true;
                    }
                }
                
                if(!rightLetter && letter.length > 1){
                    console.log("\nYou must input a single letter.\n");
                } else if (!rightLetter) {
                    console.log("\nSorry, not that letter.");
                    guesses--;
                    console.log("Guesses left: " + guesses + "\n");
                } else {
                    console.log("\n" + hidWord.reveal() + "\n");
                    rightLetter = false;
                }
                fillIn();
            });
    } else if (hidWord.reveal() !== movie && guesses === 0) {
        console.log("------------------");
        console.log("Sorry, you ran out of guesses!");
        console.log("The movie was " + movie + ".");
    } else {
        console.log("------------------");
        console.log("The movie is " + hidWord.reveal() + ".");
        console.log("Congratulations! You won!");
    }
}

fillIn();