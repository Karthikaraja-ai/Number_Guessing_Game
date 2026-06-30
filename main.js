// Generate a random number between 1 and 100
const randomNumber = Math.floor(Math.random() * 100) + 1;

const guessInput = document.getElementById("guess-input");
const guessBtn = document.getElementById("guess-btn");
const result = document.getElementById("result");

let attempts = 0;

guessBtn.addEventListener("click", () => {
  const userGuess = parseInt(guessInput.value);
  attempts++;

  if (isNaN(userGuess)) {
    result.textContent = "⚠️ Please enter a valid number!";
    return;
  }

  if (userGuess < 1 || userGuess > 100) {
    result.textContent = "❌ Number must be between 1 and 100!";
    return;
  }

  if (userGuess === randomNumber) {
    result.textContent = `🎉 Correct! The number was ${randomNumber}. You guessed it in ${attempts} attempts.`;
    guessBtn.disabled = true;
  } else if (userGuess < randomNumber) {
    result.textContent = "📉 Too low! Try again.";
  } else {
    result.textContent = "📈 Too high! Try again.";
  }
});