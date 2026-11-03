# Number Guessing Game — Veda Technology Task 25

A responsive browser-based number guessing game built with HTML5, CSS3 and vanilla JavaScript.

## Features
- Generates a random whole number from 1 to 100.
- Gives higher/lower hints after each valid guess.
- Tracks the number of attempts and displays previous guesses.
- Validates empty, out-of-range, non-integer and repeated guesses.
- Shows a success message when the correct number is found.
- Play Again button starts a fresh game.
- Saves the best (lowest) attempt count in browser `localStorage`.
- Responsive layout for mobile and desktop.

## Run locally
1. Download or clone this repository.
2. Open the project folder in VS Code.
3. Open `index.html` in a browser, or use the VS Code Live Server extension.

No installation or build step is required.

## Project structure
```text
veda-task-25-number-guessing-game/
├── index.html
├── style.css
├── script.js
└── README.md
```

## Technologies
- HTML5 — page structure
- CSS3 — styling and responsive layout
- JavaScript — random number generation, validation, hints and attempt tracking

## Random number logic
`Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER + 1)) + MIN_NUMBER`
creates an integer from 1 through 100, including both endpoints.

## Deployment
This is a static website and can be deployed using GitHub Pages, Netlify or Vercel.
For GitHub Pages, push the project files to a public repository, then open **Settings → Pages** and deploy from the `main` branch (root folder).

## Interview questions
1. **How do you generate a random integer in a range?**  
   Use `Math.floor(Math.random() * (max - min + 1)) + min`.

2. **How do you give feedback for an out-of-range guess?**  
   Validate the input before comparing it with the target and display a clear message if it is outside 1–100.

3. **How do you reset the game state?**  
   Generate a new target and reset attempts, guesses, messages and input state in the `startGame()` function.
