var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "x", "y", "z"];
// var newGame = location.reload();
var compRandomLetter;
var wins = 0;
var losses = 0;
var guessesLeft;
var elGuesses = document.getElementById('guesses');
var elWins = document.getElementById('wins');
var elLosses = document.getElementById('losses');

//First determine if user has started a new game. Set the Guesses to 9 and WINS and LOSSES to 0.  Then have the computer generate a random letter.


// if (newGame === true) {
//     guessesleft = 9,
//         wins = 0,
//         losses = 0,
//         generateLetter();
// }


//Have player type in a letter. Then determine if it is equal to the computer's choice or not.  If it is then WINS goes up by 1 and the guesses return to O.  If the player's choice is not equal to that of the computer than the losses go up by 1 and the guesses left go down by 1.

document.onkeyup = function (event) {

    var LetterChoice = event.key;
    console.log(LetterChoice);
    if (LetterChoice === compRandomLetter) {
        wins++;
        console.log("you won");
        elWins.innerHTML = wins;
        newRound();
    }
      else{
           
            guessesLeft--;
            if(guessesleft === 0){
                losses++;
                newRound();
            }
            
            elLosses.innerHTML = losses;

        }
    }


    // continue the game until user runs out of guesses (9), or gets a win.  The player can keep going to get as many wins as he or she wants.

















function generateLetter() {

    var randomIndex = Math.floor(Math.random() * 26);
    compRandomLetter = alphabet[randomIndex];

}

function newRound() {
    //Here you want to reset all of the values in your game to default.
    guessesLeft = 9;
    elGuesses.innerHTMLt = guessesLeft;
    generateLetter();
}