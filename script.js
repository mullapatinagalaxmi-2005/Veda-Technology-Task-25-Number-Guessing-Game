// Number Guessing Game — Veda Technology Task 25
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

const guessInput = document.getElementById('guess-input');
const guessButton = document.getElementById('guess-btn');
const playAgainButton = document.getElementById('play-again-btn');
const message = document.getElementById('message');
const attemptCount = document.getElementById('attempt-count');
const bestScoreDisplay = document.getElementById('best-score');
const guessHistory = document.getElementById('guess-history');
const historyCount = document.getElementById('history-count');

let targetNumber;
let attempts;
let guesses;
let gameOver;
let bestScore = loadBestScore();

function loadBestScore() {
  try {
    const saved = Number(localStorage.getItem('numberGuessingBestScore'));
    return Number.isInteger(saved) && saved > 0 ? saved : null;
  } catch (error) {
    return null;
  }
}

function updateBestScore() {
  bestScoreDisplay.textContent = bestScore ?? '—';
}

function setMessage(text, type = '') {
  message.textContent = text;
  message.className = `message ${type}`.trim();
}

function startGame() {
  targetNumber = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER;
  attempts = 0;
  guesses = [];
  gameOver = false;

  attemptCount.textContent = '0';
  guessHistory.innerHTML = '<span class="empty-history">Your guesses will appear here.</span>';
  historyCount.textContent = '0 guesses';
  guessInput.value = '';
  guessInput.disabled = false;
  guessButton.disabled = false;
  setMessage('Type a number to get started.');
  updateBestScore();
  guessInput.focus();
}

function renderHistory() {
  guessHistory.innerHTML = '';
  guesses.forEach((guess) => {
    const chip = document.createElement('span');
    chip.className = `guess-chip ${guess.result}`;
    chip.textContent = guess.value;
    guessHistory.appendChild(chip);
  });
  historyCount.textContent = `${guesses.length} ${guesses.length === 1 ? 'guess' : 'guesses'}`;
}

function submitGuess() {
  if (gameOver) return;

  const rawValue = guessInput.value.trim();
  if (rawValue === '') {
    setMessage('Please enter a number before guessing.', 'error');
    guessInput.focus();
    return;
  }

  const guess = Number(rawValue);
  if (!Number.isInteger(guess) || guess < MIN_NUMBER || guess > MAX_NUMBER) {
    setMessage(`Enter a whole number from ${MIN_NUMBER} to ${MAX_NUMBER}.`, 'error');
    guessInput.focus();
    return;
  }

  if (guesses.some((item) => item.value === guess)) {
    setMessage('You already tried that number. Choose a different one.', 'error');
    guessInput.select();
    return;
  }

  attempts += 1;
  attemptCount.textContent = attempts;

  if (guess === targetNumber) {
    guesses.push({ value: guess, result: 'correct' });
    renderHistory();
    setMessage(`Correct! You found the number in ${attempts} ${attempts === 1 ? 'attempt' : 'attempts'}. 🎉`, 'success');
    gameOver = true;
    guessInput.disabled = true;
    guessButton.disabled = true;

    if (bestScore === null || attempts < bestScore) {
      bestScore = attempts;
      try {
        localStorage.setItem('numberGuessingBestScore', String(bestScore));
      } catch (error) {
        // The game still works if browser storage is unavailable.
      }
      updateBestScore();
    }
  } else if (guess < targetNumber) {
    guesses.push({ value: guess, result: 'low' });
    renderHistory();
    setMessage('Too low! Try a higher number. ↑', 'hint');
  } else {
    guesses.push({ value: guess, result: 'high' });
    renderHistory();
    setMessage('Too high! Try a lower number. ↓', 'hint');
  }

  guessInput.value = '';
  if (!gameOver) guessInput.focus();
}

guessButton.addEventListener('click', submitGuess);
playAgainButton.addEventListener('click', startGame);
guessInput.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') submitGuess();
});

startGame();
