'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
// document.querySelector('.number').textContent = secretNumber;
console.log(secretNumber);

let score = 20;

document.querySelector('.btn_check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (guess != secretNumber && score === 0) {
    document.querySelector('.message').textContent = '😢 you lost the game';
  } else if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('main').style.backgroundColor = '#60b347';
    document.querySelector('header').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = guess;

    document.querySelector('.highscore').textContent = score;
    document.querySelector('.message').textContent = '🥳 Correct Number!';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = '📈 Too high!';
    score--;
    document.querySelector('.score').textContent = score;
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = '📉 Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.btn_again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing...';
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('main').style.backgroundColor = '#222';
  document.querySelector('header').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
