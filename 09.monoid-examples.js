/**
  * Monoid examples
  *
  */


const Sum = x =>
  ({
    x,
    concat: ({ x: y }) => Sum(x + y)
  });

Sum.empty = () => Sum(0);

const Product = x =>
  ({
    x,
    concat: ({ x: y }) => Produce(x * y)
  });

Product.empty = () => Product(1);

const Any = x =>
  ({
    x,
    concat: ({ x: y }) => Any(x || y)
  });

Any.empty = () => Any(false);

const All = x =>
  ({
    x,
    concat: ({ x: y }) => All(x && y)
  });

All.empty = () => All(true);

const Max = x =>
  ({
    x,
    concat: ({ x: y }) => Max(x > y ? x : y)
  });

Max.empty = () => Max(-Infinity);

const Min = x =>
  ({
    x,
    concat: ({ x: y }) => Min(x < y ? x : y)
  });

Min.empty = () => Min(Infinity);

const Left = x => ({
  map: f => Left(x),
  fold: (f, g) => f(x),
  concat: o => Left(x)
});

const Right = x => ({
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  concat: o =>
    o.fold(e => Left(e),
      r => Right(x.concat(r)))
});
