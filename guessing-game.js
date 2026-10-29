// 1) The computer generates a random number between 0 and 10
function generateNumber() {
    return Math.floor(Math.random() * 11); // 0 to 10
}

// 2) Prompt the player to guess a number
function getGuess() {
    const input = prompt("Guess a number between 0 and 10:");

    // Player pressed Cancel
    if (input === null) {
        return null;
    }

    const guess = Number(input);

    // Validate the input
    if (input.trim() === "" || isNaN(guess) || guess < 0 || guess > 10) {
        alert("Please enter a valid number between 0 and 10.");
        return getGuess(); // ask again
    }

    return guess;
}

// 3) Compare the guess with the secret number
function checkGuess(guess, secret) {
    if (guess === secret) {
        alert("Yeah, you guessed it");
        return true;
    } else if (guess < secret) {
        alert("too low, try again");
    } else {
        alert("too high, try again");
    }
    return false;
}

// 4) Play one full round (repeat until the player guesses right)
function playRound() {
    const secret = generateNumber();
    let correct = false;

    while (!correct) {
        const guess = getGuess();

        if (guess === null) {
            return; // player quit in the middle of the round
        }

        correct = checkGuess(guess, secret);
    }
}

// 5) Ask the player if they want to play again
function askPlayAgain() {
    return confirm("Do you want to play again?");
}

// 6) Main function: runs the game and repeats while the player decides
function startGame() {
    let playAgain = true;

    while (playAgain) {
        playRound();
        playAgain = askPlayAgain();
    }

    alert("Thanks for playing. Goodbye!");
}