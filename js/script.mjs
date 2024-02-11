import { buildButtons, clearBlanks, updateHangman } from './ui-manager.mjs';
import { getLetter, getWord, youWin, gameOver } from './game-logic.mjs';
import { alphabet, words } from './data.mjs';

const playButton = document.getElementById('play');
const buttonsDiv = document.getElementById('buttons');
const hangman = document.getElementById('hangman');
const blanks = document.getElementsByClassName('blank');

function startGame() {
  let turnCount = 0;
  let badGuessCount = 0;
  let goodGuessCount = 0;

  playButton.remove();
  updateHangman(hangman, badGuessCount);

  clearBlanks(blanks);
  const word = getWord(words);
  console.log(word);
  buttonsDiv.innerHTML = buildButtons(alphabet);

  alphabet.forEach((char) => {
    const button = document.getElementById(char);

    button.addEventListener('click', () => {
      const letter = getLetter(button);
      turnCount++;
      button.classList.add('disabled');
      if (!word.includes(letter)) {
        badGuessCount++;
        updateHangman(hangman, badGuessCount);
        if (badGuessCount >= 7) {
          gameOver(buttonsDiv, word);
        }
      } else {
        const wordArray = word.split('');
        for (let i = 0; i < wordArray.length; i++) {
          if (wordArray[i] === letter) {
            blanks[i].value = letter;
            goodGuessCount++;
          }
        }
        if (goodGuessCount >= 6) {
          youWin(buttonsDiv, hangman);
        }
      }
    });
  });
}

playButton.addEventListener('click', startGame);

export { startGame };
