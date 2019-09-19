const Sum = x =>
  ({
    x,
    concat: ({ x: y }) => Sum(x + y),
    inspect: () => `Sum(${x})`
  });

const All = x =>
  ({
    x,
    concat: ({ x: y }) => All(x && y),
    inspect: () => `All(${x})`
  });

const First = x =>
  ({
    x,
    concat: _ => First(x),
    inspect: () => `First(${x})`
  });

exports.Sum = Sum;
exports.All = All;
exports.First = First;
