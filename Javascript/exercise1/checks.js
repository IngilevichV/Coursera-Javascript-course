// Встроенный в Node.JS модуль для проверок
var assert = require('assert');

// Подключаем свою функцию
var sum = require('./index.js');
console.info(sum('101 gjgjg', '17'))

assert.equal(sum('101 gjgjg', '17'), NaN, 'При сложении 101 gjgjg и 17 получится NaN');
assert.equal(sum(12, 33), 45, 'При сложении 12 и 33 получится 45');
assert.equal(sum(101, '17'), 118, 'При сложении 101 и 17 получится 118');


console.info('OK!');
