var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
var wins = 0;
var losses = 0;
var guessesRemaining = 10;
var guesses = "";
var playerLetter = "";

// Calculating random number
var cpuChoice = letters[Math.floor(Math.random() * 26)];
// Confirms letter is picked correctly
console.log(cpuChoice);

// Captures user letter input
document.onkeydown = function (event) {
    var playerLetter = event.key;
    console.log(playerLetter);

    if (playerLetter === cpuChoice) {
        wins++;
        alert("You've done it!");
    } else if (playerLetter !== cpuChoice) {
        guessesRemaining--;

        $("#guesses").append(playerLetter + " ");
    }
    
    // This *SHOULD* reset the game...
    function reset() {
        guessesRemaining = 10;
        guesses = "";
    }

    if (guessesRemaining === 0) {
        losses++;
        alert("You lose!");
        reset();
    }

}

// I have no idea why this isn't working. It should work... I think?
