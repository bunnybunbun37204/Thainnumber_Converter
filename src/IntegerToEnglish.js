'use strict';

const numberToWords = require("number-to-words");

/**
 * Converts an Integer number to English form.
 * @example IntegerToEnglish(112,'ordinal')=> '112th'
 * IntegerToEnglish(112,'words')=> 'one hundred twelve'
 * IntegerToEnglish(112,'wordsordinal')=> 'one hundred twelfth'
 * @param {string|number} number
 * @param {string} option
 * @returns {string}
 */

function IntegerToEnglish(number, option) {
  if (typeof number === "string") number = parseInt(number);
  if (option === "") return "plz type option words, ordinal or wordsordinal";
  switch (option) {
    case "words":
      return numberToWords.toWords(number);
      break;
    case "ordinal":
      return numberToWords.toOrdinal(number);
      break;
    case "wordsordinal":
      return numberToWords.toWordsOrdinal(number);
      break;
    default:
      return "plz type option words, ordinal or wordsordinal";
      break;
  }
}

module.exports = IntegerToEnglish;
