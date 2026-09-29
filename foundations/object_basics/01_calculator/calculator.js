const add = function(a,b) {
	return a + b;
};

const subtract = function(a,b) {
	return a - b;
};

const sum = function(array) {
  summed = 0;
	for (let num of array) {
    summed = summed + num;
  }
  return summed;
};

const multiply = function(array) {
  multiplied = 1;
	for (let num of array) {
    multiplied= multiplied * num;
  }
  return multiplied;
};

const power = function(a,b) {
	return a ** b;
};

const factorial = function(num) {
  factor = 1;
	for (let i = 1; i <= num; i++){
    factor *= i;
  }
  return factor;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
