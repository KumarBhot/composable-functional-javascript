const Left = x => ({
  chain: f => Left(x),
  map: f => Left(x),
  fold: (f, g) => f(x),
  inspect: () => `Left( ${x} )`
});

const Right = x => ({
  chain: f => f(x),
  map: f => Right(f(x)),
  fold: (f, g) => g(x),
  inspect: () => `Right( ${x} )`
});

const fromNullable = x =>
  x ? Right(x) : Left(null);

const tryCatch = f => {
  try {
    return Right(f());
  } catch (e) {
    return Left(e);
  }
};

exports.Left = Left;
exports.Right = Right;
exports.fromNullable = fromNullable;
exports.tryCatch = tryCatch;
