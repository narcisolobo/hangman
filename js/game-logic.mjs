import { startGame } from './script.mjs';

/**
 * The `getLetter` function takes an HTML button
 * element as input and returns the text content
 * of that button.
 *
 * @param {HTMLButtonElement} button
 * @returns {string}
 */
function getLetter(button) {
  return button.textContent;
}

/**
 * The `getWord` function takes an array of strings as
 * input and returns a random word from that array. It
 * generates a random index using `Math.random()` and
 * `Math.floor()`, and then uses that index to access
 * a word from the array.
 *
 * @param {string[]} words
 * @returns {string}
 */
function getWord(words) {
  const randIdx = Math.floor(Math.random() * words.length);
  return words[randIdx];
}

/**
 * The `youWin` function is responsible for displaying a
 * "YOU WIN!" message and a "PLAY AGAIN" button on the
 * webpage. It takes an HTMLDivElement as input, which
 * represents a container element where the message and
 * button will be displayed.
 *
 * @param {HTMLDivElement} buttonsDiv
 * @param {HTMLImageElement} img
 */
function youWin(buttonsDiv, img) {
  buttonsDiv.innerHTML = `
    <h1 class="text-center full-width">YOU WIN!</h1>
    <button class="btn btn-primary middle-two" id="play-again">PLAY AGAIN</button>
  `;
  img.src = './images/hangman-win.png';
  document.getElementById('play-again').addEventListener('click', startGame);
}

/**
 *
 * @param {HTMLDivElement} buttonsDiv
 * @param {string} word
 */
function gameOver(buttonsDiv, word) {
  buttonsDiv.innerHTML = `
    <h1 class="text-center full-width">GAME OVER</h1>
    <h2 class="text-center full-width">The word was: ${word}.</h2>
    <button class="btn btn-primary middle-two" id="play-again">PLAY AGAIN</button>
  `;
  document.getElementById('play-again').addEventListener('click', startGame);
}

export { getLetter, getWord, youWin, gameOver };
