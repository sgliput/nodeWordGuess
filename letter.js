var Letter = function(letter){
    this.hidden = letter;
    this.guessed = false;
    //returns the letter or a blank depending on the guessed value
    this.show = function(){
        if(this.guessed){
            return this.hidden;
        } else{
            return " _ ";
        }
    };
    //changes the guessed value if the letter's hidden value matches the letter input (lett)
    this.compare = function(lett){
        if(lett.toUpperCase() === this.hidden.toUpperCase()){
            this.guessed = true;
        }
    }
}

module.exports = Letter;

//FOR TESTING
// var a = new Letter("A");
// var a2 = new Letter("a");

// console.log(a.show());
// a.compare(a2.hidden);
// console.log(a);
// console.log(a.show());
