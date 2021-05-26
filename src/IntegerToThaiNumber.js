/* eslint-disable require-jsdoc */
'use strict';

function splitText(text, spliter) {
  text = text.split(spliter);
  const data = text.reduce((a, b) => a + b);
  return data;
}

const INTEGERNUMBERS_DICTIONARY = {
  0: '๐',
  1: '๑',
  2: '๒',
  3: '๓',
  4: '๔',
  5: '๕',
  6: '๖',
  7: '๗',
  8: '๘',
  9: '๙',
};

/**
 * Converts an Integer number to Thai number as String.
 * @example IntegerToThaiNumber('112') => '๑๑๒'
 * @param {string|number} number
 * @returns {string} thainumber
 */

function IntegerToThaiNumber(number) {
  number = number.toString();
  if (number === '' || number === null) return 'data is null';
  let value = splitText(number, ',');
  if (value.length === 1) value = value[0].split('');
  const newvalue = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] in INTEGERNUMBERS_DICTIONARY) {
      newvalue[i] = INTEGERNUMBERS_DICTIONARY[value[i]];
    } else {
      return 'error check your data is it integer';
    }
  }
  const thainumber = newvalue.reduce((a, b) => a + b);
  return thainumber;
}

module.exports = IntegerToThaiNumber;
