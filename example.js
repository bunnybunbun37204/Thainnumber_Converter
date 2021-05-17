import ThaiNumber_Converter from './index.js';

//convert to number
console.log(ThaiNumber_Converter.ThainumToInteger('๑,๑๑๓'));
// output is 1113

//convert to string
console.log(ThaiNumber_Converter.ThaiNumtoStringData('๑๑๒'));
// output is 112

//convert Integer to thai
console.log(ThaiNumber_Converter.IntegerToThaiNumber('112'));
console.log(ThaiNumber_Converter.IntegerToThaiNumber(112));
// output is ๑๑๒

/* Thanks to antronic to convert number to ThaiLang*/
/* Source code https://github.com/antronic/thai-baht-text-js */
console.log(ThaiNumber_Converter.IntegerToThaiLang(112));
console.log(ThaiNumber_Converter.IntegerToThaiLang('112'));
// output is หนึ่งร้อยสิบสอง