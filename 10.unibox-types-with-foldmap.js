/**
  * Unibox types with foldMap
  *
  */

const { Map, List } = require('immutable-ext');
const { Sum } = require('./monoids.js');

const list = [1, 2, 3];
const map = { milli: 1, brian: 2, sara: 3 };

const onList = List.of(...list)
  .map(Sum)
  .fold(Sum.empty());

const onListResult = List.of(...list)
  .foldMap(Sum, Sum.empty());

console.log('List with map and fold separately:', onList);
console.log('List with foldMap:', onListResult);

const onMap = Map(map)
  .map(Sum)
  .fold(Sum.empty());

const onMapResult = Map(map)
  .foldMap(Sum, Sum.empty());

console.log('Map with map and fold separately:', onMap);
console.log('Map with foldMap:', onMapResult);
