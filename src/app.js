'use strict';

const userName = document.querySelector('.userName__element');
const number = document.querySelector('.number');
const btnForm = document.querySelector('.input');
const message = document.querySelector('.try');
const inputNumber = document.querySelector('.input-number');
const randomMessage = document.querySelector('.message');

const bestScoreInput = document.querySelector('.bestScore');
const tryInput = document.querySelector('.trys');
const creditInput = document.querySelector('.credit');

const restartbtn = document.querySelector('.newGame');

// add User Name
const nameUser = prompt('please enter your name');
userName.textContent = `welcome ${nameUser.toLowerCase()}`;

let randomNumber = Math.floor(Math.random() * 20) + 1;
let credit = 3;
let trys = 10;
let bestScore = 0;
let game = true;
let test = 3;

const sound = link => {
  const sound = new Audio(link);
  sound.play();
};

const point = (elem, pointElement) => {
  elem--;
  pointElement.textContent = elem;
};

const text = function (className, content) {
  className.textContent = `${content}`;
};

btnForm.addEventListener('submit', function (e) {
  e.preventDefault();

  if (game) {
    // if Player enter wrong input
    if (!inputNumber.value || inputNumber.value > 20 || inputNumber.value < 1) {
      text(message, `${nameUser} please add number between 1 and 20`);
    }
    // if player Win
    else if (inputNumber.value == randomNumber) {
      game = false;
      sound('success-fanfare-trumpets-6185.mp3');
      text(message, `finally ${nameUser} you crack my number Amazing`);
      text(number, randomNumber);

      // add best score
      if (trys > bestScore) {
        bestScore = trys;
        text(bestScoreInput, trys);
      }
      document.querySelector('body').style.color = '#d1b604';
      number.classList.add('changeColor');

      // if the player input wrong number
    } else if (inputNumber.value != randomNumber) {
      // if player add higher or lower Number
      if (trys > 1) {
        text(
          message,
          `${nameUser} your number is ${
            inputNumber.value < randomNumber ? 'lower' : 'greater'
          } than my number`
        );
        inputNumber.value = '';
        randomMessage.textContent = randomWords();
      } else {
        game = false;
        sound('piano-crash-sound-37898.mp3');
        text(number, randomNumber);
        text(
          message,
          `${nameUser} the number was ${randomNumber} , please try again`
        );
        document.querySelector('body').style.color = '#a60303';

        // add Negative credit 1
        test--;
        point(credit--, creditInput);
      }

      point(trys--, tryInput);
    }
  }
});

// RESTART THE GAME
restartbtn.addEventListener('click', function () {
  randomNumber = Math.floor(Math.random() * 20) + 1;
  trys = 10;
  game = true;

  inputNumber.value = '';
  document.querySelector('body').style.color = '';
  number.classList.remove('changeColor');
  text(number, '?');
  text(tryInput, trys);
  text(message, 'try ...');
});
