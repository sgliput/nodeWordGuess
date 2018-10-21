var Letter = require("./letter.js");

var Word = function (movie) {
    this.word = [];
    var movieArray = movie.split("");
    //creates a letter object for each letter in the movie and pushes it into the word array
    for (var g = 0; g < movieArray.length; g++) {
        var letter = new Letter(movieArray[g]);
        this.word.push(letter);
    }
    //displays full word of letters and blanks depending on the guessed value of each
    this.reveal = function () {
        var display = [];
        for (var i = 0; i < this.word.length; i++) {
            display.push(this.word[i].show());
        }
        var combined = display.join("");
        return combined;

    }
    //determines the guessed value of each letter depending on if it matches the letter input
    this.compareWord = function (lett) {
        for (var j = 0; j < this.word.length; j++) {
            this.word[j].compare(lett);
        }
    }
}


module.exports = Word;