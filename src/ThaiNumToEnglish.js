'use strict';

const ThainumToInteger = require('./ThainumToInteger.js');
const numberToWords = require("number-to-words");

/**
 * Converts an Thai number to English form.
 * @example ThaiNumToEnglish('๑๑๒','ordinal')=> '112th'
 * ThaiNumToEnglish('๑๑๒','words')=> 'one hundred twelve'
 * ThaiNumToEnglish('๑๑๒','wordsordinal')=> 'one hundred twelfth'
 * @param {string} thainumber
 * @param {string} option
 * @returns {string}
 */

function ThaiNumToEnglish(thainumber, option) {
  let num = ThainumToInteger(thainumber);
  if (option === "") return "plz type option words, ordinal or wordsordinal";
  switch (option) {
    case "words":
      return numberToWords.toWords(num);
      break;
    case "ordinal":
      return numberToWords.toOrdinal(num);
      break;
    case "wordsordinal":
      return numberToWords.toWordsOrdinal(num);
      break;
    default:
      return "plz type option words, ordinal or wordsordinal";
      break;
  }
}

module.exports = ThaiNumToEnglish;