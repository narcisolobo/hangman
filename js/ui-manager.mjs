/**
 * The `buildButtons` function takes a string `alphabet`
 * as input and returns a string of HTML buttons.
 *
 * @param {string} alphabet
 * @returns {string}
 */
function buildButtons(alphabet) {
  let buttons = '';
  for (const char of alphabet) {
    buttons += `<button id="${char}" class="btn btn-primary">${char.toUpperCase()}</button>`;
  }
  return buttons;
}

/**
 * The `clearBlanks` function is used to clear the values of
 * input fields. It takes in a parameter `blanks`, which is
 * expected to be an HTMLCollection of input elements. It
 * iterates over each input element in the collection and sets
 * its value to an empty string, effectively clearing the input
 * field.
 *
 * @param {HTMLCollectionOf<HTMLInputElement>} blanks
 */
function clearBlanks(blanks) {
  for (const blank of blanks) {
    blank.value = '';
  }
}

/**
 * The `updateHangman` function takes in two parameters:
 * `img` (which is expected to be an HTMLImageElement) and
 * `num` (which is expected to be a number), and updates
 * the image according to the number.
 *
 * @param {HTMLImageElement} img
 * @param {number} num
 */
function updateHangman(img, num) {
  img.src = `./images/hangman-${num}.png`;
}

export { buildButtons, clearBlanks, updateHangman };
