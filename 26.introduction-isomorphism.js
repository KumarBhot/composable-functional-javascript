const { Right, Left } = require('./either');

// from(to(x)) === x
// to(from(x)) === x
// String ~ [Char]
const Iso = (to, from) => ({ to, from });

const chars = Iso(s => s.split(''), c => c.join(''));

const helloWorld = 'hello world';
const arrHelloWorld = [ 'h', 'e', 'l', 'l', 'o', 'w', 'o', 'r', 'l', 'd' ];

const res1 = chars.from(chars.to(helloWorld));
const res2 = chars.to(chars.from(arrHelloWorld));

console.log(res1, helloWorld);
console.log(res2, arrHelloWorld);

const truncate = str => chars.from(chars.to(str).slice(0, 3)).concat('...');

const res3 = truncate(helloWorld);

console.log(res3, 'hel...');

// [a] ~ Either || null || a
const singleton = Iso(
  e => e.fold(() => [], x => [x]),
  ([x]) => x ? Right(x) : Left()
);

const filterEither = (e, pred) => singleton.from(singleton.to(e).filter(pred));

const res4 = filterEither(
  Right('hello'),
  x => x.match(/h/ig)).map(x => x.toUpperCase(x));

console.log(res4);
