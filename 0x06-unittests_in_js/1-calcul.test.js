/*
 * A program that contains the test case for 1-calcul.js
 */
const assert = require('assert').strict;
const calculateNumber = require('./1-calcul');

describe('calculateNumber', function () {
  describe('Sum of two numbers', function () {
    it('should return 6', function () {
      assert.equal(calculateNumber('SUM', 1.4, 4.5), 6);
    });
  });

  describe('Subtraction of two numbers', function () {
    it('should return -4', function () {
      assert.equal(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });
  });

  describe('Division of two numbers', function () {
    it('should return 0.2', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });
  });

  describe('Division by 0', function () {
    it('should return Error', function () {
      assert.equal(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
