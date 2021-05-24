/* eslint-disable require-jsdoc */
'use strict';

const THHAINUMBERS_DICTIONARY = {
  '0': '0',
  '๐': '0',
  '๑': '1',
  '๒': '2',
  '๓': '3',
  '๔': '4',
  '๕': '5',
  '๖': '6',
  '๗': '7',
  '๘': '8',
  '๙': '9',
};

function splitText(text, spliter) {
  text = text.split(spliter);
  const data = text.reduce((a, b) => a + b);
  return data;
}

/**
 * Converts an Thai number to Integer as String.
 * @example ThaiNumtoStringData('๑๑๒') => '112'
 * @param {string} thainumber
 * @returns {string}
 */

function ThaiNumtoStringData(thainumber) {
  if (thainumber === '' || thainumber === null) return 'data is null';
  let value = splitText(thainumber, ',');
  if (value.length === 1) value = value[0].split('');
  let newvalue = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] in THHAINUMBERS_DICTIONARY) {
      newvalue[i] = THHAINUMBERS_DICTIONARY[value[i]];
    } else {
      return 'error check your data is it thai?';
    }
  }
  newvalue = newvalue.reduce((a, b) => a + b);
  return newvalue;
}

module.exports = ThaiNumtoStringData;
