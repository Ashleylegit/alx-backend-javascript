/*
 * A function that takes an argument called success (Boolean)
 * and returns a resolved promise with the object 
 * {data: 'Successful response from the API' }
 */
function getPaymentTokenFromAPI(success) {
  if (success === true)
    return Promise.resolve({ data: 'Successful response from the API' });
}

module.exports = getPaymentTokenFromAPI;
