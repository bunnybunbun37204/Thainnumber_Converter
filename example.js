import ThaiNumber_Converter from './index.js';

//convert to number
console.log(ThaiNumber_Converter.ThainumToInteger('๑,๑๑๓'));
// output is 1113

//convert to string
console.log(ThaiNumber_Converter.ThaiNumtoStringData('๑๑๒'));
// output is 112

//convert Integer to Thai
console.log(ThaiNumber_Converter.IntegerToThaiNumber('112'));
console.log(ThaiNumber_Converter.IntegerToThaiNumber(112));
// output is ๑๑๒

//convert Integer to Thai language
console.log(ThaiNumber_Converter.IntegerToThaiLang(112));
console.log(ThaiNumber_Converter.IntegerToThaiLang('112'));
// output is หนึ่งร้อยสิบสอง

/* Thanks to Martin Eneqvist to number-to-word lib */
/* Source code https://github.com/marlun78/number-to-words */
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"ordinal"));
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"words"));
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"wordsordinal"));
/* out put is 
112th
one hundred twelve
one hundred twelfth
*/

//Special feature you can use number-to-word lib to do it
//convert integer to English form
//you can type number arguments as string or integer if you want
console.log(ThaiNumber_Converter.IntegerToEnglish('112', 'ordinal'));
console.log(ThaiNumber_Converter.IntegerToEnglish('112', 'words'));
console.log(ThaiNumber_Converter.IntegerToEnglish('112', 'wordsordinal'));
/* out put is 
112th
one hundred twelve
one hundred twelfth
*/