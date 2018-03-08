var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "x", "y", "z"];
newGame = location.reload();
compRandomLetter = generateLetter();
wins = 0;
losses = 0;
guessesLeft;
userletterChoice = alphabet[];


//First determine if user has started a new game. Set the Guesses to 9 and WINS and LOSSES to 0.  Then have the computer generate a random letter.


if (newGame === true) {
    guessesleft = 9;
    wins = 0;
    losses = 0;
    generateLetter();
}


//Have player type in a letter.
if (userLetterChoice !== compRandomLetter) {
    losses = (i++),
    guessesLeft = (i--),
    document.getElementById('losses'),
    textContent = "losses";
}

else if(userLetterChoice === compRandomLetter) {
    wins = i++,
    guessesLeft = i--;


}













function generateLetter() {
    var chars = "abcdefghijklmnopqurstuvwxyz";
    return chars.substr(Math.floor(Math.random() * 26), 1);
} 