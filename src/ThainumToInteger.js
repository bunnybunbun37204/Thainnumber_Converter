/* eslint-disable require-jsdoc */
'use strict';

const THAINUMBERS_DICTIONARY = {
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
 * Converts an Thai number to Integer as number.
 * @example ThainumToInteger('๑๑๒') => 112
 * @param {string} thainumber
 * @returns {number} integernumber
 */

function ThainumToInteger(thainumber) {
  if (thainumber === '' || thainumber === null) return 'data is null';
  let value = splitText(thainumber, ',');
  if (value.length === 1) value = value[0].split('');
  const newvalue = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] in THAINUMBERS_DICTIONARY) {
      newvalue[i] = THAINUMBERS_DICTIONARY[value[i]];
    } else {
      return 'error check your data is it thai?';
    }
  }
  const integernumber = newvalue.reduce((a, b) => a + b);
  return parseInt(integernumber);
}

module.exports = ThainumToInteger;
