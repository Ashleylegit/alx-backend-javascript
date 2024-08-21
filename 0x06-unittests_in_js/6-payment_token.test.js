/*
 * A program that contains the test case for 6-payment_token.js
 */
const getPaymentTokenFromAPI = require('./6-payment_token');
var { expect } = require('chai');

describe('getPaymentTokenFromAPI', function () {
  describe('arg true', function () {
    it('resolved correctly', function (done) {
      getPaymentTokenFromAPI(true)
        .then((resolve) => {
          expect(resolve).to.include({ data: 'Successful response from the API' });
          done();
        })
        .catch((err) => done(err));
    });
  });
});
