const Box = x =>
  ({
    ap: bx => bx.map(x),
    map: f => Box(f(x)),
    fold: f => f(x),
    chain: f => f(x),
    join: m => Box(m).chain(y => y)(Box(x)),
    inspect: () => `Box('${x}')`
  });

Box.of = x => Box(x);

exports.Box = Box;
