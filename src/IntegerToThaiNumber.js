'use strict';

function splitText(text, spliter) {
  text = text.split(spliter);
  let data = text.reduce((a, b) => a + b);
  return data;
}

const IntegerNumbers_Dictionary = {
  0: "๐",
  1: "๑",
  2: "๒",
  3: "๓",
  4: "๔",
  5: "๕",
  6: "๖",
  7: "๗",
  8: "๘",
  9: "๙",
};

/**
 * Converts an Integer number to Thai number as String.
 * @example IntegerToThaiNumber('112') => '๑๑๒'
 * @param {string|number} number
 * @returns {string}
 */

function IntegerToThaiNumber(number) {
  number = number.toString();
  if (number === "" || number === null) return "data is null";
  let value = splitText(number, ",");
  if (value.length === 1) value = value[0].split("");
  let new_value = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] in IntegerNumbers_Dictionary) {
      new_value[i] = IntegerNumbers_Dictionary[value[i]];
    } else {
      return "error check your data is it integer";
    }
  }
  new_value = new_value.reduce((a, b) => a + b);
  return new_value;
}

module.exports = IntegerToThaiNumber;