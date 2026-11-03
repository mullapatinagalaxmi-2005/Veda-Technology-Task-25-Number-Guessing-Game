# 🎯 Number Guessing Game

### Veda Technology – Web Development Internship | Task 25

A fun and interactive **Number Guessing Game** developed using HTML5, CSS3, and JavaScript. The game generates a random number between 1 and 100, and users must guess the correct number using higher and lower hints.

## 📌 Project Overview

The Number Guessing Game is a beginner-friendly web development project designed to practice JavaScript fundamentals, random number generation, conditional statements, input validation, and game state management.

## ✨ Features

- 🎲 Random number generation between 1 and 100.
- ⬆️ Higher hint when the guess is too low.
- ⬇️ Lower hint when the guess is too high.
- 🔢 Automatic attempt counter.
- 📝 Previous guesses history.
- ✅ Input validation for incorrect and out-of-range values.
- 🏆 Winning message when the correct number is guessed.
- 🔄 Play Again option to restart the game.
- ⭐ Best score tracking using Local Storage.
- 📱 Responsive design for mobile and desktop devices.

## 🛠️ Technologies Used

| Technology | Purpose |
|---|---|
| HTML5 | Structure of the application |
| CSS3 | Styling and responsive design |
| JavaScript | Game logic and functionality |
| Local Storage | Saving the best score |

## 📂 Project Structure

```text
Veda-Technology-Task-25-Number-Guessing-Game/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

## ⚙️ How to Run the Project

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code.
3. Open `index.html` in your browser.
4. Enter a number between 1 and 100.
5. Click the Guess button.
6. Follow the higher or lower hints.
7. Find the correct number and try again!

## 💡 JavaScript Concepts Used

- `Math.random()` – Generates a random decimal number.
- `Math.floor()` – Converts the random value into an integer.
- Conditional statements – Compare the user's guess with the target number.
- Event listeners – Handle button clicks and keyboard input.
- DOM manipulation – Update messages, attempts, and guess history.
- Local Storage – Store the user's best score.

### Random Number Generation

```javascript
const targetNumber =
  Math.floor(Math.random() * 100) + 1;
```

This generates a random integer between 1 and 100.

## 🎓 Learning Outcomes

Through this project, I learned how to:

- Generate random numbers using JavaScript.
- Implement conditional logic.
- Handle user input and validate data.
- Track attempts and update the DOM dynamically.
- Manage game state and reset functionality.
- Store data using browser Local Storage.
- Create responsive web interfaces using CSS.

## 🎤 Interview Questions

**1. How do you generate a random integer within a range?**

Using `Math.floor(Math.random() * (max - min + 1)) + min`.

**2. How do you provide higher and lower hints?**

By comparing the user's guess with the randomly generated target number using conditional statements.

**3. How do you reset the game?**

Generate a new random number and reset the attempts, guesses, messages, and input fields.

## 👩‍💻 Developed By

**Mullapati Nagalaxmi**

Web Development Intern – Veda Technology

**GitHub Repository:**  
https://github.com/mullapatinagalaxmi-2005/Veda-Technology-Task-25-Number-Guessing-Game

---

⭐ If you like this project, feel free to explore the repository!

