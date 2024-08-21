/*
 * A function that accepts two arguments (number) a and b
 * and returns the sum, subtraction or division of it
 */
function calculateNumber(type, a, b) {
  const num_a = Math.round(a);
  const num_b = Math.round(b);

  if (type === 'SUBTRACT') {
    return num_a - num_b;
  }

  if (type === 'DIVIDE') {
    if (num_b === 0) {
      return 'Error';
    }
    return num_a / num_b;
  }

  return num_a + num_b;
}

module.exports = calculateNumber;
