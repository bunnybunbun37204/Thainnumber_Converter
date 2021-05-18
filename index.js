import THBText from 'thai-baht-text';
import numberToWords from 'number-to-words';

const ThaiNumbers_Dictionary = {
  "0": "0",
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

function splitText(text, spliter) {
  text = text.split(spliter);
  let data = text.reduce((a, b) => a + b);
  return data;
}

export default class ThaiNumber_Converter {
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

  static IntegerToThaiNumber(number){
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

  static IntegerToThaiLang(number){
    if(typeof (number) === 'string') number = parseInt(number);
    let str = THBText(number);
    let value = str.split("บาทถ้วน");
    return value[0];
  }
  static ThaiNumToEnglish(thainumber, option){
    let num = this.ThainumToInteger(thainumber);
    if(option === "") return "plz type option words, ordinal or wordsordinal"; 
    switch (option){
      case "words":
        return numberToWords.toWords(num);
        break;
      case "ordinal":
        return numberToWords.toOrdinal(num);
        break;
      case "wordsordinal":
        return numberToWords.toWordsOrdinal(num);
        break;
    }
  } 
  static IntegerToEnglish(number, option){
    if(typeof (number) === 'string') number = parseInt(number);
    if(option === "") return "plz type option words, ordinal or wordsordinal"; 
    switch (option){
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
    }
  }
}
