'use strict';

const ThaiNumbers_Dictionary = {
    0: "0",
    "๐": "0",
    "๑": "1",
    "๒": "2",
    "๓": "3",
    "๔": "4",
    "๕": "5",
    "๖": "6",
    "๗": "7",
    "๘": "8",
    "๙": "9",
};

function splitText(text, spliter) {
    text = text.split(spliter);
    let data = text.reduce((a, b) => a + b);
    return data;
}

/**
 * Converts an Thai number to Integer as number.
 * @example ThainumToInteger('๑๑๒') => 112
 * @param {string} thainumber
 * @returns {number}
 */

function ThainumToInteger(thainumber) {
    if (thainumber === "" || thainumber === null) return "data is null";
    let value = splitText(thainumber, ",");
    if (value.length === 1) value = value[0].split("");
    let new_value = [];
    for (let i = 0; i < value.length; i++) {
      if (value[i] in ThaiNumbers_Dictionary) {
        new_value[i] = ThaiNumbers_Dictionary[value[i]];
      } else {
        return "error check your data is it thai?";
      }
    }
    new_value = new_value.reduce((a, b) => a + b);
    return parseInt(new_value);
}

module.exports = ThainumToInteger;