/**
  * Ensuring failsafe combination using monoids
  *
  */

const { Sum, All } = require('./semigroups.js');

// Promoting Semigroups to Monoids
Sum.empty = () => Sum(0);
All.empty = () => All(true);

// A similar `empty()` method wouldn't work for `First` semigroup
// So `First` cannot be promoted to a Monoid

console.log(Sum.empty().concat(Sum(1).concat(Sum(2)))); // Sum(3)
console.log(All.empty().concat(All(true).concat(All(false)))); // All(false);

// if is safe to reduce on Monoids
// e.g. Sum and All
// but not not safe to reduce on Semigroups e.g. First

// const sum = x =>
//   xs.reduce((acc, x) => acc + x, 0);

// const all = x =>
//   xs.reduce((acc, x) => acc && x, true);
