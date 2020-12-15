"use strict";

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

let body = document.querySelector("body");
let secretNum = document.querySelector(".number");
let highScoreEl = document.querySelector(".highscore");
let input = document.querySelector(".guess");

const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};

const updateScore = function (score) {
  document.querySelector(".score").textContent = score;
};

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(input.value);
  if (!guess) {
    displayMessage("No number!");
  } else if (guess === secretNumber) {
    displayMessage("Correct Number!");
    secretNum.textContent = secretNumber;

    if (score > highScore) {
      highScore = score;
    }
    highScoreEl.textContent = highScore;
    body.style.backgroundColor = "#60b347";

    secretNum.style.width = "30rem";
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      updateScore(score);
      if (guess > secretNumber) {
        displayMessage("Too hight!");
      } else {
        displayMessage("Too low!");
      }
    } else {
      displayMessage("You lost the game!");
      updateScore(0);
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  body.style.backgroundColor = "#222";
  updateScore(20);
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage("Start guessing...");
  secretNum.textContent = "?";
  input.value = "";

  secretNum.style.width = "15rem";
});
