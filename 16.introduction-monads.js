const { Box } = require('./box');

const join = m => m.chain(x => x);

const m3 = Box(Box(Box(3)));
const m = Box('wonder');

// Monad === (Box || Either || Task || List).of, pure, chain (flatMap, bind, >>=)

const r1 = join(m3.map(join));
const r2 = join(join(m3));

// rule 1
console.log(r1, r2);

const res1 = join(Box.of(m));
const res2 = join(m.join(Box.of));

// rule 2
console.log(res1, res2);
