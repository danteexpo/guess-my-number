'use strict';

let randomNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let finished = false;
const body = document.querySelector('body');
const again = document.querySelector('.again');
const number = document.querySelector('.number');
const guess = document.querySelector('.guess');
const check = document.querySelector('.check');
const docScore = document.querySelector('.score');
const docHighscore = document.querySelector('.highscore');

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

check.addEventListener('click', function() {
  if(guess.value){
    if(guess.value < 1 || guess.value > 20) {
      displayMessage('❌ Invalid number!');
    } else if(randomNumber > guess.value) {
      displayMessage('👆 Too low!');
    } else if(randomNumber < guess.value) {
      displayMessage('👇 Too high!');
    } else {
      body.classList.add('guessed');
      displayMessage('✅ Correct number!');
      number.textContent = randomNumber;
      check.classList.add('disabled');
      check.disabled = true;
      finished = true;
      if(highscore < score){
        highscore = score;
        docHighscore.textContent = highscore;
      };
    };
    if(!finished){
      score -= 1;
      docScore.textContent = score;
    }
    if(score === 0){
      check.classList.add('disabled');
      check.disabled = true;
    };
  } else {
    displayMessage('Enter a guess!');
  };
  // console.log({ score, highscore });
});

again.addEventListener('click', () => {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  body.classList.remove('guessed');
  number.textContent = '?';
  guess.value = '';
  check.classList.remove('disabled');
  check.disabled = false;
  displayMessage('Start guessing!');
  score = 20;
  docScore.textContent = score;
  finished = false;
})
