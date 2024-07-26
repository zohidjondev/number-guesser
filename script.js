// Number Guessing Game

// Function to generate a random number between min and max (inclusive)
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game
function startGame() {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);
  let attempts = 0;
  let guess = null;

  console.log(`Welcome to the Number Guessing Game!`);
  console.log(
    `I'm thinking of a number between ${min} and ${max}. Can you guess it?`
  );

  while (guess !== randomNumber) {
    guess = parseInt(prompt(`Enter your guess:`), 10);
    attempts += 1;

    if (isNaN(guess)) {
      alert(`Please enter a valid number.`);
    } else if (guess < randomNumber) {
      alert(`Too low! Try again.`);
    } else if (guess > randomNumber) {
      alert(`Too high! Try again.`);
    } else {
      alert(
        `Congratulations! You guessed the number in ${attempts} attempts.`
      );
    }
  }
}

// Start the game
startGame();
