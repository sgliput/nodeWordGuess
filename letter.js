var Letter = function(letter){
    this.hidden = letter;
    this.guessed = false;
    this.show = function(){
        if(this.guessed){
            return this.hidden;
        } else{
            return " _ ";
        }
    };
    this.compare = function(lett){
        if(lett.toUpperCase() === this.hidden.toUpperCase()){
            this.guessed = true;
        }
    }
}

module.exports = Letter;

// var a = new Letter("A");
// var a2 = new Letter("a");

// console.log(a.show());
// a.compare(a2.hidden);
// console.log(a);
// console.log(a.show());
