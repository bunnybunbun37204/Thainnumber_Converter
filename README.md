# ThaiNumber_Converter
## Installation

Use the package manager [npm](https://nodejs.org/en/) to install npm packages.

1. Use this to install all packages
```bash
npm install thainumberconverter
```

## Example (ES)

```js
import ThaiNumber_Converter from 'thainumberconverter';

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

//convert Integer to Thai language (The Maximum number that can be converted is 9999999)
console.log(ThaiNumber_Converter.IntegerToThaiLang(9999999));
console.log(ThaiNumber_Converter.IntegerToThaiLang('9999999'));
console.log(ThaiNumber_Converter.IntegerToThaiLang('9,999,999'));
// output is เก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้า

/* Thanks to Martin Eneqvist to number-to-word lib */
/* Source code https://github.com/marlun78/number-to-words */
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"ordinal"));
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"words"));
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"wordsordinal"));
/* output is 
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
/* output is 
112th
one hundred twelve
one hundred twelfth
*/
```
## Example (CommomJS)

```js
const ThaiNumber_Converter = require('thainumberconverter');

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

//convert Integer to Thai language (The Maximum number that can be converted is 9999999)
console.log(ThaiNumber_Converter.IntegerToThaiLang(9999999));
console.log(ThaiNumber_Converter.IntegerToThaiLang('9999999'));
console.log(ThaiNumber_Converter.IntegerToThaiLang('9,999,999'));
// output is เก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้า

/* Thanks to Martin Eneqvist to number-to-word lib */
/* Source code https://github.com/marlun78/number-to-words */
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"ordinal"));
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"words"));
console.log(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒',"wordsordinal"));
/* output is 
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
/* output is 
112th
one hundred twelve
one hundred twelfth
*/
```

## What's new (IMPORTANT!!)

1. Bugs fixed
2. Add function convert integer to thai number
3. Add function convert integer to thai language by using my algorithm (In development) but it can convert in maximum number at 9999999 and it may be Unstable. if you want to use stable version plz click [THIS](https://www.npmjs.com/package/thainumberconverter/v/1.2.0) to download a previous version.
4. Add function convert Thai number to English form by using [number-to-word](https://github.com/marlun78/number-to-words) lib.
5. This package can be used in ES and CommomJS.

## License

This project is under MIT license.

#### Some feature may be UNSTABLE because I delete some dependency to make my package use less dependency and I'm sorry, you can download 1.2.0 version to use more stable feature.


