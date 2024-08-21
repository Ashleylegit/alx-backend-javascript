/*
 * A program that contains the test case for 4-payment.js
 */
const sinon = require('sinon');
var { expect } = require('chai');

const Utils = require('./utils');
const sendPaymentRequestToApi = require('./4-payment');

describe('Stubs', function () {
  it('has the same math', () => {
    const stubUtils = sinon.stub(Utils, 'calculateNumber');
    stubUtils.returns(10);
    const spyConsole = sinon.spy(console, 'log');

    sendPaymentRequestToApi(100, 20);

    expect(stubUtils.calledOnceWithExactly('SUM', 100, 20)).to.be.true;
    expect(spyConsole.calledOnceWithExactly('The total is: 10')).to.be.true;

    stubUtils.restore();
    spyConsole.restore();
  });
})
