const numberToWords = require("number-to-words");

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

const ThaiLang_Dictionary = {
  0: "ศูนย์",
  1: "หนึ่ง",
  2: "สอง",
  3: "สาม",
  4: "สี่",
  5: "ห้า",
  6: "หก",
  7: "เจ็ด",
  8: "แปด",
  9: "เก้า",
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
  let data = text.reduce((a, b) => a + b);
  return data;
}

function changeText(value) {
  if (value === "หนึ่ง") return "เอ็ด";
  else if (value === "สอง") return "ยี่";
  else return value;
}

function Tensdigit(arr, index, position) {
  if (arr[index] === "หนึ่ง") arr[index] = "";
  arr.splice(position, 0, "สิบ");
}

function checkTensdigit(data) {
  if (data === "เอ็ด") return "";
  else return data;
}

//เก้าพันศูนย์ร้อยเก้าสิบเก้า
function deleteZeroText(arr) {
  for (let i = 0; i < arr.length; i++) {
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

  if (value === 2) {
  } else if (value === 3) {
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
  }
  //else if (value === 8) {
  //   arr.splice(1, 0, "สิบล้าน");
  //   arr.splice(3, 0, "ล้าน");
  //   arr.splice(5, 0, "แสน");
  //   arr.splice(7, 0, "หมื่น");
  //   arr.splice(9, 0, "พัน");
  //   arr.splice(11, 0, "ร้อย");
  // }
  else {
    return "error plz check your input";
  }
  arr = deleteZeroText(arr);
  return arr.reduce((a, b) => a + b);
}

function NumToLang(value) {
  if (value.length === 1) return ThaiLang_Dictionary[value];
  let new_value = [];
  for (let i = 0; i < value.length; i++) {
    if (value[i] in ThaiLang_Dictionary) {
      new_value[i] = ThaiLang_Dictionary[value[i]];
    } else {
      return "error check your data is it integer";
    }
  }
  return insertThai(value.length, new_value);
}

module.exports = class ThaiNumber_Converter {
  static ThainumToInteger(thainumber) {
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
  static ThaiNumtoStringData(thainumber) {
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
    return new_value;
  }

  static IntegerToThaiNumber(number) {
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

  static IntegerToThaiLang(number) {
    let mtf = [[]];
    let output = [];
    number = number.toString();
    if (number.length === 1) return NumToLang(number);
    if (number === "" || number === null) return "data is null";
    let value = splitText(number, ",");
    if (value.length === 1) value = value[0].split("");
    let MAX_LOOP = Math.ceil(value.length / 7);
    if (MAX_LOOP < 1) MAX_LOOP = 1;
    for (let i = 0; i < MAX_LOOP; i++) {
      for (let j = 0; j < 6; j++) {
        if (mtf[i] === undefined) mtf[i] = [];
        mtf[i][j] = value[value.length - j - 1];
        let index = mtf[i].indexOf(undefined);
        if (index > -1) mtf[i].splice(index, 1);
      }
      mtf[i] = mtf[i].reduce((a, b) => b + a);
      value = value.replace(mtf[i], "");
    }
    let k;
    for (k = 0; k < mtf.length; k++) {
      output[k] = NumToLang(mtf[k]);
    }
    if (k > 0) {
      let str = repeatStringNumTimes("ล้าน", k - 1);
      output[k - 1] = output[k - 1].concat(str);
    }
    return output.reduce((a, b) => b + a);
  }

  static ThaiNumToEnglish(thainumber, option) {
    let num = this.ThainumToInteger(thainumber);
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
  static IntegerToEnglish(number, option) {
    if (typeof number === "string") number = parseInt(number);
    if (option === "") return "plz type option words, ordinal or wordsordinal";
    switch (option) {
      case "words":
        return numberToWords.toWords(number);
        break;
      case "ordinal":
        return numberToWords.toOrdinal(number);
        break;
      case "wordsordinal":
        return numberToWords.toWordsOrdinal(number);
        break;
      default:
        return "plz type option words, ordinal or wordsordinal";
        break;
    }
  }
};
