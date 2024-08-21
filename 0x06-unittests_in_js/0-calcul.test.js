/*
 * A program that contains the test case for 0-calcul.js
 */
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', function () {
  describe('Sum of two numbers', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(1, 3), 4);
    });
  });
  
  describe('Sum of two numbers reversed', function () {
    it('should return 4', function () {
      assert.strictEqual(calculateNumber(3, 1), 4);
    });
  });

  describe('Sum of two numbers one rounded', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(1, 3.7), 5);
    });
  });

  describe('Sum of two numbers one rounded reversed', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(3.7, 1), 5);
    });
  });

  describe('Sum of two numbers two rounded', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(1.2, 3.7), 5);
    });
  });
  
  describe('Sum of two numbers two rounded reversed', function () {
    it('should return 5', function () {
      assert.strictEqual(calculateNumber(3.7, 1.2), 5);
    });
  });

  describe('Sum of two numbers two rounded', function () {
    it('should return 6', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });
  
  describe('Sum of two numbers two rounded reversed', function () {
    it('should return 6', function () {
      assert.strictEqual(calculateNumber(1.5, 3.7), 6);
    });
  });
});
