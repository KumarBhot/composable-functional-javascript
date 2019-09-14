/**
  * Refactor imperative code to a single composed expression using Box
  *
  */

const { Box } = require('./box.js');

// Imeprative style
function imperative () {
  const moneyToFloat = str =>
    parseInt(str.replace(/\$/g, ''));

  const percentToFloat = str => {
    const replaced = str.replace(/\%/g, '');
    const number = parseFloat(replaced);

    return number * 0.01;
  };

  const applyDiscount = (price, discount) => {
    const cost = moneyToFloat(price);
    const savings = percentToFloat(discount);

    return cost - cost * savings;
  };

  const result = applyDiscount('$5.00', '20%');

  return result;
}

console.log('Imperative: ', imperative());

// Functional style
function functional () {
  const moneyToFloat = str =>
    Box(str)
      .map(s => s.replace(/\$/g, ''))
      .map(parseInt);

  const percentToFloat = str =>
    Box(str)
      .map(s => s.replace(/\%/g, ''))
      .map(parseFloat)
      .map(n => n * 0.01);

  const applyDiscount = (price, discount) =>
    moneyToFloat(price)
      .fold(cost =>
        percentToFloat(discount)
          .fold(savings => cost - cost * savings)
      );

  const result = applyDiscount('$5.00', '20%');

  return result;
}

console.log('Functional: ', functional());
