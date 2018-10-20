var Letter = require("./letter.js");

var Word = function (movie) {
    this.word = [];
    var movieArray = movie.split("");
    for (var g = 0; g < movieArray.length; g++) {
        var letter = new Letter(movieArray[g]);
        this.word.push(letter);
    }
    this.reveal = function () {
        var display = [];
        for (var i = 0; i < this.word.length; i++) {
            display.push(this.word[i].show());
        }
        var combined = display.join("");
        return combined;

    }
    this.compareWord = function (lett) {
        for (var j = 0; j < this.word.length; j++) {
            this.word[j].compare(lett);
        }
    }
}


module.exports = Word;