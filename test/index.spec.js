const ThaiNumber_Converter = require('../src/index');
const assert = require('assert');

assert.strictEqual(ThaiNumber_Converter.ThainumToInteger('๑๑๒'), 112);
console.log(`\u001B[32m✓\u001B[39m Tests 1 passed`);
assert.strictEqual(ThaiNumber_Converter.ThaiNumtoStringData('๑๑๒'), '112');
console.log(`\u001B[32m✓\u001B[39m Tests 2 passed`);
assert.strictEqual(ThaiNumber_Converter.IntegerToThaiLang('9,999,999,999,999'), 'เก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้า');
console.log(`\u001B[32m✓\u001B[39m Tests 3 passed`);
assert.strictEqual(ThaiNumber_Converter.IntegerToEnglish(112,'ordinal'),'112th');
console.log(`\u001B[32m✓\u001B[39m Tests 4 passed`);
assert.strictEqual(ThaiNumber_Converter.IntegerToThaiNumber(112),'๑๑๒');
console.log(`\u001B[32m✓\u001B[39m Tests 5 passed`);
assert.strictEqual(ThaiNumber_Converter.IntegerToThaiLang(1),'หนึ่ง');
console.log(`\u001B[32m✓\u001B[39m Tests 6 passed`);
assert.strictEqual(ThaiNumber_Converter.ThaiNumToEnglish('๑๑๒','ordinal'),'112th');
console.log(`\u001B[32m✓\u001B[39m Tests 7 passed`);
assert.strictEqual(ThaiNumber_Converter.IntegerToThaiLang('1000101'),'หนึ่งล้านหนึ่งร้อยเอ็ด');
console.log(`\u001B[32m✓\u001B[39m Tests 8 passed`);

