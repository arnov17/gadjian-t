const faktorial = (k) => {
  var number = 1;
  var result = 1;
  while (number <= k) {
    result = result * number;
    number = number + 1;
  }
  return result;
};

module.exports = faktorial;
