/*
 * A program that contains the test case for 3-payment.js
 */
const sinon = require('sinon');
var { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('Spies', function () {
  it('has the same math', () => {
    const spyUtils = sinon.spy(Utils, 'calculateNumber');
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(spyUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 120')).to.be.true;

    spyUtils.restore();
    spyConsole.restore();
  });
});
