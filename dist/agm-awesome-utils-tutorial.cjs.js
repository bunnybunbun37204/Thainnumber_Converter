'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

var numberToWords = require('number-to-words');

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
  } //else if (value === 8) {
  //   arr.splice(1, 0, "สิบล้าน");
  //   arr.splice(3, 0, "ล้าน");
  //   arr.splice(5, 0, "แสน");
  //   arr.splice(7, 0, "หมื่น");
  //   arr.splice(9, 0, "พัน");
  //   arr.splice(11, 0, "ร้อย");
  // } 
  else {
      return "maximum number that can be converted is 9999999";
    }

  arr = deleteZeroText(arr);
  return arr.reduce(function (a, b) {
    return a + b;
  });
}

function NumToLang(number) {
  number = number.toString();
  if (number === "" || number === null) return "data is null";
  var value = splitText(number, ",");
  if (value.length === 1) value = value[0].split("");
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

module.exports = /*#__PURE__*/function () {
  function ThaiNumber_Converter() {
    _classCallCheck(this, ThaiNumber_Converter);
  }

  _createClass(ThaiNumber_Converter, null, [{
    key: "ThainumToInteger",
    value: function ThainumToInteger(thainumber) {
      if (thainumber === "" || thainumber === null) return "data is null";
      var value = splitText(thainumber, ",");
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
      return parseInt(new_value);
    }
  }, {
    key: "ThaiNumtoStringData",
    value: function ThaiNumtoStringData(thainumber) {
      if (thainumber === "" || thainumber === null) return "data is null";
      var value = splitText(thainumber, ",");
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
  }, {
    key: "IntegerToThaiNumber",
    value: function IntegerToThaiNumber(number) {
      number = number.toString();
      if (number === "" || number === null) return "data is null";
      var value = splitText(number, ",");
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
  }, {
    key: "IntegerToThaiLang",
    value: function IntegerToThaiLang(number) {
      number = number.toString();
      return NumToLang(number);
    }
  }, {
    key: "ThaiNumToEnglish",
    value: function ThaiNumToEnglish(thainumber, option) {
      var num = this.ThainumToInteger(thainumber);
      if (option === "") return "plz type option words, ordinal or wordsordinal";

      switch (option) {
        case "words":
          return numberToWords.toWords(num);

        case "ordinal":
          return numberToWords.toOrdinal(num);

        case "wordsordinal":
          return numberToWords.toWordsOrdinal(num);

        default:
          return "plz type option words, ordinal or wordsordinal";
      }
    }
  }, {
    key: "IntegerToEnglish",
    value: function IntegerToEnglish(number, option) {
      if (typeof number === "string") number = parseInt(number);
      if (option === "") return "plz type option words, ordinal or wordsordinal";

      switch (option) {
        case "words":
          return numberToWords.toWords(number);

        case "ordinal":
          return numberToWords.toOrdinal(number);

        case "wordsordinal":
          return numberToWords.toWordsOrdinal(number);

        default:
          return "plz type option words, ordinal or wordsordinal";
      }
    }
  }]);

  return ThaiNumber_Converter;
}();
