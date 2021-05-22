(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global['agm-awesome-utils-tutorial'] = {}));
}(this, (function (exports) { 'use strict';

    var ThaiNumbers_Dictionary$1 = {
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
      "๙": "9"
    };

    function splitText$3(text, spliter) {
      text = text.split(spliter);
      var data = text.reduce(function (a, b) {
        return a + b;
      });
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
      var value = splitText$3(thainumber, ",");
      if (value.length === 1) value = value[0].split("");
      var new_value = [];

      for (var i = 0; i < value.length; i++) {
        if (value[i] in ThaiNumbers_Dictionary$1) {
          new_value[i] = ThaiNumbers_Dictionary$1[value[i]];
        } else {
          return "error check your data is it thai?";
        }
      }

      new_value = new_value.reduce(function (a, b) {
        return a + b;
      });
      return parseInt(new_value);
    }

    var ThainumToInteger_1 = ThainumToInteger;

    var ThaiNumbers_Dictionary = {
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
      "๙": "9"
    };

    function splitText$2(text, spliter) {
      text = text.split(spliter);
      var data = text.reduce(function (a, b) {
        return a + b;
      });
      return data;
    }
    /**
     * Converts an Thai number to Integer as String.
     * @example ThaiNumtoStringData('๑๑๒') => '112'
     * @param {string} thainumber
     * @returns {string}
     */


    function ThaiNumtoStringData(thainumber) {
      if (thainumber === "" || thainumber === null) return "data is null";
      var value = splitText$2(thainumber, ",");
      if (value.length === 1) value = value[0].split("");
      var new_value = [];

      for (var i = 0; i < value.length; i++) {
        if (value[i] in ThaiNumbers_Dictionary) {
          new_value[i] = ThaiNumbers_Dictionary[value[i]];
        } else {
          return "error check your data is it thai?";
        }
      }

      new_value = new_value.reduce(function (a, b) {
        return a + b;
      });
      return new_value;
    }

    var ThaiNumtoStringData_1 = ThaiNumtoStringData;

    // Simplified https://gist.github.com/marlun78/885eb0021e980c6ce0fb
    function isFinite(value) {
        return !(typeof value !== 'number' || value !== value || value === Infinity || value === -Infinity);
    }

    var _isFinite = isFinite;

    var MAX_SAFE_INTEGER = 9007199254740991;

    var maxSafeInteger = MAX_SAFE_INTEGER;

    function isSafeNumber(value) {
        return typeof value === 'number' && Math.abs(value) <= maxSafeInteger;
    }

    var isSafeNumber_1 = isSafeNumber;

    /**
     * Converts an integer into a string with an ordinal postfix.
     * If number is decimal, the decimals will be removed.
     * @example toOrdinal(12) => '12th'
     * @param {number|string} number
     * @returns {string}
     */
    function toOrdinal(number) {
        var num = parseInt(number, 10);

        if (!_isFinite(num)) {
            throw new TypeError(
                'Not a finite number: ' + number + ' (' + typeof number + ')'
            );
        }
        if (!isSafeNumber_1(num)) {
            throw new RangeError(
                'Input is not a safe number, it’s either too large or too small.'
            );
        }
        var str = String(num);
        var lastTwoDigits = Math.abs(num % 100);
        var betweenElevenAndThirteen = lastTwoDigits >= 11 && lastTwoDigits <= 13;
        var lastChar = str.charAt(str.length - 1);
        return str + (betweenElevenAndThirteen ? 'th'
                : lastChar === '1' ? 'st'
                : lastChar === '2' ? 'nd'
                : lastChar === '3' ? 'rd'
                : 'th');
    }

    var toOrdinal_1 = toOrdinal;

    var ENDS_WITH_DOUBLE_ZERO_PATTERN = /(hundred|thousand|(m|b|tr|quadr)illion)$/;
    var ENDS_WITH_TEEN_PATTERN = /teen$/;
    var ENDS_WITH_Y_PATTERN = /y$/;
    var ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN = /(zero|one|two|three|four|five|six|seven|eight|nine|ten|eleven|twelve)$/;
    var ordinalLessThanThirteen = {
        zero: 'zeroth',
        one: 'first',
        two: 'second',
        three: 'third',
        four: 'fourth',
        five: 'fifth',
        six: 'sixth',
        seven: 'seventh',
        eight: 'eighth',
        nine: 'ninth',
        ten: 'tenth',
        eleven: 'eleventh',
        twelve: 'twelfth'
    };

    /**
     * Converts a number-word into an ordinal number-word.
     * @example makeOrdinal('one') => 'first'
     * @param {string} words
     * @returns {string}
     */
    function makeOrdinal(words) {
        // Ends with *00 (100, 1000, etc.) or *teen (13, 14, 15, 16, 17, 18, 19)
        if (ENDS_WITH_DOUBLE_ZERO_PATTERN.test(words) || ENDS_WITH_TEEN_PATTERN.test(words)) {
            return words + 'th';
        }
        // Ends with *y (20, 30, 40, 50, 60, 70, 80, 90)
        else if (ENDS_WITH_Y_PATTERN.test(words)) {
            return words.replace(ENDS_WITH_Y_PATTERN, 'ieth');
        }
        // Ends with one through twelve
        else if (ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN.test(words)) {
            return words.replace(ENDS_WITH_ZERO_THROUGH_TWELVE_PATTERN, replaceWithOrdinalVariant);
        }
        return words;
    }

    function replaceWithOrdinalVariant(match, numberWord) {
        return ordinalLessThanThirteen[numberWord];
    }

    var makeOrdinal_1 = makeOrdinal;

    var TEN = 10;
    var ONE_HUNDRED = 100;
    var ONE_THOUSAND = 1000;
    var ONE_MILLION = 1000000;
    var ONE_BILLION = 1000000000;           //         1.000.000.000 (9)
    var ONE_TRILLION = 1000000000000;       //     1.000.000.000.000 (12)
    var ONE_QUADRILLION = 1000000000000000; // 1.000.000.000.000.000 (15)
    var MAX = 9007199254740992;             // 9.007.199.254.740.992 (15)

    var LESS_THAN_TWENTY = [
        'zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten',
        'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];

    var TENTHS_LESS_THAN_HUNDRED = [
        'zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];

    /**
     * Converts an integer into words.
     * If number is decimal, the decimals will be removed.
     * @example toWords(12) => 'twelve'
     * @param {number|string} number
     * @param {boolean} [asOrdinal] - Deprecated, use toWordsOrdinal() instead!
     * @returns {string}
     */
    function toWords(number, asOrdinal) {
        var words;
        var num = parseInt(number, 10);

        if (!_isFinite(num)) {
            throw new TypeError(
                'Not a finite number: ' + number + ' (' + typeof number + ')'
            );
        }
        if (!isSafeNumber_1(num)) {
            throw new RangeError(
                'Input is not a safe number, it’s either too large or too small.'
            );
        }
        words = generateWords(num);
        return asOrdinal ? makeOrdinal_1(words) : words;
    }

    function generateWords(number) {
        var remainder, word,
            words = arguments[1];

        // We’re done
        if (number === 0) {
            return !words ? 'zero' : words.join(' ').replace(/,$/, '');
        }
        // First run
        if (!words) {
            words = [];
        }
        // If negative, prepend “minus”
        if (number < 0) {
            words.push('minus');
            number = Math.abs(number);
        }

        if (number < 20) {
            remainder = 0;
            word = LESS_THAN_TWENTY[number];

        } else if (number < ONE_HUNDRED) {
            remainder = number % TEN;
            word = TENTHS_LESS_THAN_HUNDRED[Math.floor(number / TEN)];
            // In case of remainder, we need to handle it here to be able to add the “-”
            if (remainder) {
                word += '-' + LESS_THAN_TWENTY[remainder];
                remainder = 0;
            }

        } else if (number < ONE_THOUSAND) {
            remainder = number % ONE_HUNDRED;
            word = generateWords(Math.floor(number / ONE_HUNDRED)) + ' hundred';

        } else if (number < ONE_MILLION) {
            remainder = number % ONE_THOUSAND;
            word = generateWords(Math.floor(number / ONE_THOUSAND)) + ' thousand,';

        } else if (number < ONE_BILLION) {
            remainder = number % ONE_MILLION;
            word = generateWords(Math.floor(number / ONE_MILLION)) + ' million,';

        } else if (number < ONE_TRILLION) {
            remainder = number % ONE_BILLION;
            word = generateWords(Math.floor(number / ONE_BILLION)) + ' billion,';

        } else if (number < ONE_QUADRILLION) {
            remainder = number % ONE_TRILLION;
            word = generateWords(Math.floor(number / ONE_TRILLION)) + ' trillion,';

        } else if (number <= MAX) {
            remainder = number % ONE_QUADRILLION;
            word = generateWords(Math.floor(number / ONE_QUADRILLION)) +
            ' quadrillion,';
        }

        words.push(word);
        return generateWords(remainder, words);
    }

    var toWords_1 = toWords;

    /**
     * Converts a number into ordinal words.
     * @example toWordsOrdinal(12) => 'twelfth'
     * @param {number|string} number
     * @returns {string}
     */
    function toWordsOrdinal(number) {
        var words = toWords_1(number);
        return makeOrdinal_1(words);
    }

    var toWordsOrdinal_1 = toWordsOrdinal;

    var src$1 = {
        toOrdinal: toOrdinal_1,
        toWords: toWords_1,
        toWordsOrdinal: toWordsOrdinal_1
    };

    /**
     * Converts an Thai number to English form.
     * @example ThaiNumToEnglish('๑๑๒','ordinal')=> '112th'
     * ThaiNumToEnglish('๑๑๒','words')=> 'one hundred twelve'
     * ThaiNumToEnglish('๑๑๒','wordsordinal')=> 'one hundred twelfth'
     * @param {string|number} number
     * @param {string} option
     * @returns {string}
     */


    function ThaiNumToEnglish(thainumber, option) {
      var num = ThainumToInteger_1(thainumber);
      if (option === "") return "plz type option words, ordinal or wordsordinal";

      switch (option) {
        case "words":
          return src$1.toWords(num);

        case "ordinal":
          return src$1.toOrdinal(num);

        case "wordsordinal":
          return src$1.toWordsOrdinal(num);

        default:
          return "plz type option words, ordinal or wordsordinal";
      }
    }

    var ThaiNumToEnglish_1 = ThaiNumToEnglish;

    function splitText$1(text, spliter) {
      text = text.split(spliter);
      var data = text.reduce(function (a, b) {
        return a + b;
      });
      return data;
    }

    var IntegerNumbers_Dictionary = {
      0: "๐",
      1: "๑",
      2: "๒",
      3: "๓",
      4: "๔",
      5: "๕",
      6: "๖",
      7: "๗",
      8: "๘",
      9: "๙"
    };
    /**
     * Converts an Integer number to Thai number as String.
     * @example IntegerToThaiNumber('112') => '๑๑๒'
     * @param {string} number
     * @returns {string}
     */

    function IntegerToThaiNumber(number) {
      number = number.toString();
      if (number === "" || number === null) return "data is null";
      var value = splitText$1(number, ",");
      if (value.length === 1) value = value[0].split("");
      var new_value = [];

      for (var i = 0; i < value.length; i++) {
        if (value[i] in IntegerNumbers_Dictionary) {
          new_value[i] = IntegerNumbers_Dictionary[value[i]];
        } else {
          return "error check your data is it integer";
        }
      }

      new_value = new_value.reduce(function (a, b) {
        return a + b;
      });
      return new_value;
    }

    var IntegerToThaiNumber_1 = IntegerToThaiNumber;

    var ThaiLang_Dictionary = {
      0: "ศูนย์",
      1: "หนึ่ง",
      2: "สอง",
      3: "สาม",
      4: "สี่",
      5: "ห้า",
      6: "หก",
      7: "เจ็ด",
      8: "แปด",
      9: "เก้า"
    };

    function repeatStringNumTimes(string, times) {
      var repeatedString = "";

      while (times > 0) {
        repeatedString += string;
        times--;
      }

      return repeatedString;
    }

    function splitText(text, spliter) {
      text = text.split(spliter);
      var data = text.reduce(function (a, b) {
        return a + b;
      });
      return data;
    }

    function changeText(value) {
      if (value === "หนึ่ง") return "เอ็ด";else if (value === "สอง") return "ยี่";else return value;
    }

    function Tensdigit(arr, index, position) {
      if (arr[index] === "หนึ่ง") arr[index] = "";
      arr.splice(position, 0, "สิบ");
    }

    function checkTensdigit(data) {
      if (data === "เอ็ด") return "";else return data;
    } //เก้าพันศูนย์ร้อยเก้าสิบเก้า


    function deleteZeroText(arr) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "ศูนย์") {
          arr[i] = "";
          arr[i + 1] = "";
        }
      }

      return arr;
    }

    function insertThai(value, arr) {
      arr[value - 2] = changeText(arr[value - 2]);
      if (arr[value - 1] === "หนึ่ง") arr[value - 1] = "เอ็ด";
      Tensdigit(arr, value - 2, value - 1);
      arr[value - 2] = checkTensdigit(arr[value - 2]);

      if (value === 2) ; else if (value === 3) {
        arr.splice(1, 0, "ร้อย");
      } else if (value === 4) {
        arr.splice(1, 0, "พัน");
        arr.splice(3, 0, "ร้อย");
      } else if (value === 5) {
        arr.splice(1, 0, "หมื่น");
        arr.splice(3, 0, "พัน");
        arr.splice(5, 0, "ร้อย");
      } else if (value === 6) {
        arr.splice(1, 0, "แสน");
        arr.splice(3, 0, "หมื่น");
        arr.splice(5, 0, "พัน");
        arr.splice(7, 0, "ร้อย");
      } else if (value === 7) {
        arr.splice(1, 0, "ล้าน");
        arr.splice(3, 0, "แสน");
        arr.splice(5, 0, "หมื่น");
        arr.splice(7, 0, "พัน");
        arr.splice(9, 0, "ร้อย");
      } else {
        return "error plz check your input";
      }

      arr = deleteZeroText(arr);
      return arr.reduce(function (a, b) {
        return a + b;
      });
    }

    function NumToLang(value) {
      if (value.length === 1) return ThaiLang_Dictionary[value];
      var new_value = [];

      for (var i = 0; i < value.length; i++) {
        if (value[i] in ThaiLang_Dictionary) {
          new_value[i] = ThaiLang_Dictionary[value[i]];
        } else {
          return "error check your data is it integer";
        }
      }

      return insertThai(value.length, new_value);
    }
    /**
     * Converts an Integer number to Thai language.
     * @example IntegerToThaiLang(112)=> 'หนึ่งร้อยสิบสอง'
     * @param {string|number} number
     * @returns {string}
     */


    function IntegerToThaiLang(number) {
      var mtf = [[]];
      var output = [];
      number = number.toString();
      if (number.length === 1) return NumToLang(number);
      if (number === "" || number === null) return "data is null";
      var value = splitText(number, ",");
      if (value.length === 1) value = value[0].split("");
      var MAX_LOOP = Math.ceil(value.length / 7);
      if (MAX_LOOP < 1) MAX_LOOP = 1;else if (MAX_LOOP === 1) return NumToLang(number);
      var i;

      for (i = 0; i < MAX_LOOP; i++) {
        for (var j = 0; j < 6; j++) {
          if (mtf[i] === undefined) mtf[i] = [];
          mtf[i][j] = value[value.length - j - 1];
          var index = mtf[i].indexOf(undefined);
          if (index > -1) mtf[i].splice(index, 1);
        }

        mtf[i] = mtf[i].reduce(function (a, b) {
          return b + a;
        });
        value = value.replace(mtf[i], "");
        output[i] = NumToLang(mtf[i]);
      }

      var str = repeatStringNumTimes("ล้าน", i - 1);
      output[i - 1] = output[i - 1].concat(str);
      return output.reduce(function (a, b) {
        return b + a;
      });
    }

    var IntegerToThaiLang_1 = IntegerToThaiLang;

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
          return src$1.toWords(number);

        case "ordinal":
          return src$1.toOrdinal(number);

        case "wordsordinal":
          return src$1.toWordsOrdinal(number);

        default:
          return "plz type option words, ordinal or wordsordinal";
      }
    }

    var IntegerToEnglish_1 = IntegerToEnglish;

    var src = {
      ThaiNumToInteger: ThainumToInteger_1,
      ThaiNumToStringData: ThaiNumtoStringData_1,
      ThaiNumToEnglish: ThaiNumToEnglish_1,
      IntegerToThaiNumber: IntegerToThaiNumber_1,
      IntegerToThaiLang: IntegerToThaiLang_1,
      IntegerToEnglish: IntegerToEnglish_1
    };
    var src_1 = src.ThaiNumToInteger;
    var src_2 = src.ThaiNumToStringData;
    var src_3 = src.ThaiNumToEnglish;
    var src_4 = src.IntegerToThaiNumber;
    var src_5 = src.IntegerToThaiLang;
    var src_6 = src.IntegerToEnglish;

    exports.IntegerToEnglish = src_6;
    exports.IntegerToThaiLang = src_5;
    exports.IntegerToThaiNumber = src_4;
    exports.ThaiNumToEnglish = src_3;
    exports.ThaiNumToInteger = src_1;
    exports.ThaiNumToStringData = src_2;
    exports.default = src;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
