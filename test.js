const assert = require('assert');
const {createNamedFunction} = require('./');
const expected = 'foo';
const actual  = createNamedFunction(expected, () => {}).name;
assert.equal(actual, expected);