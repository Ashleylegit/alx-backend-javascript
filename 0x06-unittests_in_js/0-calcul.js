/*
 * A function that accepts two arguments (number) a and b
 * and returns the sum of it
 */
function calculateNumber(a, b) {
  const num_a = Math.round(a);
  const num_b = Math.round(b);

  return num_a + num_b;
}

module.exports = calculateNumber;
