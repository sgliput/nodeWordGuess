# nodeWordGuess

## Gameplay

This Node word guess game application operates in the command line. It requires the inquirer NPM package.

When the index.js file is run, a random movie is selected from an array of single-word science fiction films (the same list of films from my previous [word guess game](https://sgliput.github.io/Word-Guess-Game/) that ran in the browser). The player starts with 10 letter guesses. The player is prompted for a letter, and what they type either fills in the letter if it is correct or else returns a "Sorry" message and decreases the number of guesses remaining, as seen below. 

![Gameplay Screenshot 1](/Images/wordGuessImage1.png)

The game will only accept single letter inputs, reminding players of that rule if they dare break it. When all the letters are guessed, the winner is congratulated, and if all the guesses run out without completing the word, the game is lost and the answer revealed.

![Gameplay Screenshot 2](/Images/wordGuessImage2.png)

## Behind the Scenes

The game uses two different constructors, one for each word and one for each letter in the word. Using methods in each constructor, the letter typed as input is compared to each letter object in the word, and depending on a boolean value in that letter object, the object is displayed as either its letter (if guessed correctly) or as a blank (if not yet guessed correctly). The inquirer prompt keeps asking for input until all letters are displayed or the number of guesses is reduced to zero.

![Gameplay Screenshot 3](/Images/wordGuessImage3.png)
