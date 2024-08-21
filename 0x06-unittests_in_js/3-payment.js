/*
 * A function that takes two arguments totalAmount and totalShipping
 * and returns the sum
 */
const Utils = require('./utils');

function sendPaymentRequestToApi(totalAmount, totalShipping) {
  const result = Utils.calculateNumber('SUM', totalAmount, totalShipping);
  console.log(`The total is: ${result}`);
}

module.exports = sendPaymentRequestToApi;
