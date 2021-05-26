/* eslint-disable require-jsdoc */

'use strict';

const THAILANG_DICT = {
  0: 'ศูนย์',
  1: 'หนึ่ง',
  2: 'สอง',
  3: 'สาม',
  4: 'สี่',
  5: 'ห้า',
  6: 'หก',
  7: 'เจ็ด',
  8: 'แปด',
  9: 'เก้า',
};

function repeatStringNumTimes(string, times) {
  let repeatedString = '';
  while (times > 0) {
    repeatedString += string;
    times--;
  }
  return repeatedString;
}

function splitText(text, spliter) {
  text = text.split(spliter);
  const data = text.reduce((a, b) => a + b);
  return data;
}

function changeText(value) {
  if (value === 'หนึ่ง') return 'เอ็ด';
  else if (value === 'สอง') return 'ยี่';
  else return value;
}

function tensdigit(arr, index, position) {
  if (arr[index] === 'หนึ่ง') arr[index] = '';
  arr.splice(position, 0, 'สิบ');
}

function checkTensdigit(data) {
  if (data === 'เอ็ด') return '';
  else return data;
}

function deleteZeroText(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 'ศูนย์') {
      arr[i] = '';
      arr[i + 1] = '';
    }
  }
  return arr;
}

function insertThai(value, arr) {
  arr[value - 2] = changeText(arr[value - 2]);
  if (arr[value - 1] === 'หนึ่ง') arr[value - 1] = 'เอ็ด';

  tensdigit(arr, value - 2, value - 1);
  arr[value - 2] = checkTensdigit(arr[value - 2]);

  if (value === 2) {
  } else if (value === 3) {
    arr.splice(1, 0, 'ร้อย');
  } else if (value === 4) {
    arr.splice(1, 0, 'พัน');
    arr.splice(3, 0, 'ร้อย');
  } else if (value === 5) {
    arr.splice(1, 0, 'หมื่น');
    arr.splice(3, 0, 'พัน');
    arr.splice(5, 0, 'ร้อย');
  } else if (value === 6) {
    arr.splice(1, 0, 'แสน');
    arr.splice(3, 0, 'หมื่น');
    arr.splice(5, 0, 'พัน');
    arr.splice(7, 0, 'ร้อย');
  } else if (value === 7) {
    arr.splice(1, 0, 'ล้าน');
    arr.splice(3, 0, 'แสน');
    arr.splice(5, 0, 'หมื่น');
    arr.splice(7, 0, 'พัน');
    arr.splice(9, 0, 'ร้อย');
  } else {
    return 'error plz check your input';
  }
  arr = deleteZeroText(arr);
  return arr.reduce((a, b) => a + b);
}

function numtolang(value) {
  if (value.length === 1) return THAILANG_DICT[value];
  const newvalue = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] in THAILANG_DICT) {
      newvalue[i] = THAILANG_DICT[value[i]];
    } else {
      return 'error check your data is it integer';
    }
  }
  return insertThai(value.length, newvalue);
}

/**
 * Converts an Integer number to Thai language.
 * @example IntegerToThaiLang(112)=> 'หนึ่งร้อยสิบสอง'
 * @param {string|number} number
 * @returns {string} thailanguage
 */

function IntegerToThaiLang(number) {
  const mtf = [[]];
  const output = [];
  number = number.toString();
  if (number.length === 1) return numtolang(number);
  if (number === '' || number === null) return 'data is null';
  let value = splitText(number, ',');
  if (value.length === 1) value = value[0].split('');
  let MAX_LOOP = Math.ceil(value.length / 7);
  if (MAX_LOOP < 1) MAX_LOOP = 1;
  else if (MAX_LOOP === 1) return numtolang(number);
  let i;
  for (i = 0; i < MAX_LOOP; i++) {
    for (let j = 0; j < 6; j++) {
      if (mtf[i] === undefined) mtf[i] = [];
      mtf[i][j] = value[value.length - j - 1];
      const index = mtf[i].indexOf(undefined);
      if (index > -1) mtf[i].splice(index, 1);
    }
    mtf[i] = mtf[i].reduce((a, b) => b + a);
    value = value.replace(mtf[i], '');
    output[i] = numtolang(mtf[i]);
  }
  const str = repeatStringNumTimes('ล้าน', i - 1);
  output[i - 1] = output[i - 1].concat(str);
  const thailanguage = output.reduce((a, b) => b + a);
  return thailanguage;
}

module.exports = IntegerToThaiLang;
