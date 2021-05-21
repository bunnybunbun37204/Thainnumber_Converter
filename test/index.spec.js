const ThaiNumber_Converter = require('../src/index');
const assert = require('assert');

assert.strictEqual(ThaiNumber_Converter.ThainumToInteger('๑๑๒'), 112);
console.log(`\u001B[32m✓\u001B[39m Tests 1 passed`);
assert.strictEqual(ThaiNumber_Converter.ThaiNumtoStringData('๑๑๒'), '112');
console.log(`\u001B[32m✓\u001B[39m Tests 2 passed`);
assert.strictEqual(ThaiNumber_Converter.IntegerToThaiLang('9,999,999'), 'เก้าล้านเก้าแสนเก้าหมื่นเก้าพันเก้าร้อยเก้าสิบเก้า');
console.log(`\u001B[32m✓\u001B[39m Tests 3 passed`);

