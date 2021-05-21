# ThaiNumber_Converter
## Installation

Use the package manager [npm](https://nodejs.org/en/) to install npm packages.

1. Use this to install all packages
```bash
npm install thainumberconverter
```

## Usage (ES)

```js
import ThaiNumber_Converter from 'thainumberconverter';

```
## Usage (CommomJS)

```js
const ThaiNumber_Converter = require('thainumberconverter');
```
## Example
```js

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
console.log(ThaiNumber_Converter.IntegerToThaiLang(99999999999999999999));
console.log(ThaiNumber_Converter.IntegerToThaiLang('9999999999999'));
console.log(ThaiNumber_Converter.IntegerToThaiLang('9,999,999,999,999'));
// output is เก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้า'

/* Thanks to Martin Eneqvist for number-to-word lib */
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
## test

```bash
npm run test
```

## What's new (IMPORTANT!!)

1. Bugs fixed
2. Add function convert integer to thai number.
3. Add function convert integer to thai language.
4. Add function convert Thai number to English form by using [number-to-word](https://github.com/marlun78/number-to-words) lib.
5. This package can be used in ES and CommomJS.

## License

This project is under MIT license.

#### Thanks to everyone who downlods, having fun !!!


