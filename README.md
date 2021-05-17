# ThaiNumber_Converter
## Installation

Use the package manager [npm](https://nodejs.org/en/) to install npm packages.

1. Use this to install all packages
```bash
npm install thainumberconverter
```

## Example

```js
import ThaiNumber_Converter from 'thainumberconverter';

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
```
## What's new
1. Bugs fixed
2. Add function convert integer to thai number
3. Add function convert integer to thai language by using  [thai-baht-text](https://github.com/antronic/thai-baht-text-js) lib

hope you will be happy -Bunyawat

