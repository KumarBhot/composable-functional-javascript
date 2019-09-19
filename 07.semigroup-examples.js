/**
  * Semigroup examples
  *
  */

const { Map } = require('immutable-ext');
const { Sum, All, First } = require('./semigroups.js');

const struct1 = {
  name: First('Name 1'),
  isPaid: All(true),
  points: Sum(10),
  friends: ['Name 2']
};

const struct2 = {
  name: First('Name 2'),
  isPaid: All(false),
  points: Sum(20),
  friends: ['Name 1']
};

console.log(
  Map(struct1)
    .concat(Map(struct2))
    .toJS()
);
