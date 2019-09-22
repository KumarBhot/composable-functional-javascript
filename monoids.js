const { Sum, All } = require('./semigroups.js');

// Promoting Semigroups to Monoids
Sum.empty = () => Sum(0);
All.empty = () => All(true);

exports.Sum = Sum;
exports.All = All;
