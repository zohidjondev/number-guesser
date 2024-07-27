function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

document.addEventListener("DOMContentLoaded", () => {
  const min = 1;
  const max = 100;
  const randomNumber = generateRandomNumber(min, max);
  let attempts = 0;
  let inputArea = document.querySelector(".input-area input");
  let submitButton = document.querySelector(".input-area button");
  let messageBox = document.querySelector(".message h1");

  messageBox.textContent = `Welcome to Number guesser game, can you guess number I thought from ${min} to ${max}`


  submitButton.addEventListener("click", () => {
    let guess = parseInt(inputArea.value, 10);
    attempts += 1;

    if (isNaN(guess)) {
      messageBox.textContent = `Please enter a valid number.`;
    } else if (guess < randomNumber) {
      messageBox.textContent = `Too low! Try again.`;
    } else if (guess > randomNumber) {
      messageBox.textContent = `Too high! Try again.`;
    } else {
      messageBox.textContent = `Congratulations! You guessed the number in ${attempts} attempts.`;
    }

    inputArea.value = ''; // Clear the input field
    inputArea.focus(); // Focus back to the input field
  });
});
