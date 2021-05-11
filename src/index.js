const SINGLE_ARABIC_NUMBER_REGEX = /\d/;

/**
 * Converter for Thai numbers.
 * @param {string} data - The original number string.
 * @returns {ThaiNumber}
 * @constructor
 */

const ThaiNumber = function (data) {
    this.data = data;
    return this;
};
/** Thai number characters and their Arabic number. */

ThaiNumber.numbers = {
    '0': 0,
    '๐':0,
    '๑': 1,
    '๒': 2,
    '๓': 3,
    '๔': 4,
    '๕': 5,
    '๖': 6,
    '๗': 7,
    '๘': 8,
    '๙': 9,
    '๑0': 10,
    '๑00': 100,
    '๑000': 1000,
    '๑๐': 10,
    '๑๐๐': 100,
    '๑๐๐๐': 1000,
}


