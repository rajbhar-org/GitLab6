const test = require('node:test');
const assert = require('node:assert');
const greet = require('../src/app');

test('should return a greeting message', () => {
    assert.strictEqual(greet('Rupesh'), 'Hello, Wrong!');
});

test('should return a greeting for another user', () => {
    assert.strictEqual(greet('John'), 'Hello, John!');
});