/**
  * Enforce a null check with composable code branching using Either
  *
  */

function functional () {
  const Right = x => ({
    map: f => Right(f(x)),
    fold: (f, g) => g(x),
    inspect: () => `Right( ${x} )`
  });

  const Left = x => ({
    map: f => Left(x),
    fold: (f, g) => f(x),
    inspect: () => `Left( ${x} )`
  });

  const fromNullable = x =>
    x ? Right(x) : Left(null);

  const colorCodeByName = color =>
    fromNullable({
      red: "#ff0000",
      blue: "#0000ff",
      green: "#00ff00"
    }[color]);

  const result = colorCodeByName('redd')
    .map(s => s.slice(1))
    .fold(
      e => 'error: no such color',
      c => c.toUpperCase()
    );

  return result;
}

console.log(functional());
