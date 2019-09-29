/**
  * You have been using Functors!!
  *
  * Functors essentially have a `map` method and must obey few rules:
  * (1) fx.map(f).map(g) = fx.map(g(f))
  * (2) fx.map(id) = id(fx)
  *
  */

const { Box } = require('./box');
const { Either } = require('./either');

const id = x => x;
const f = x => x.toUpperCase();
const g = x => x.toLowerCase();

const box = Box('Hello');
const either = Either('Do it!');

// Rule 1
console.log(box.map(f).map(g), box.map(x => g(f(x))));
console.log(either.map(f).map(g), either.map(x => g(f(x))));

// Rule 2
console.log(box.map(id), id(box));
console.log(either.map(id), id(either));

// both the rules work with, Task, List, Map etc.
