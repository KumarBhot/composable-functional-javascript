/**
  * Delay evaluation with LazyBox
  *
  */

const { Box } = require('./box');

const boxResult = Box(' 64 ')
  .map(abba => abba.trim())
  .map(trimmed => new Number(trimmed))
  .map(num => num + 1)
  .map(String.fromCharCode)
  .fold(x => x.toLowerCase())

console.log('With Box:', boxResult);

const LazyBox = g =>
  ({
    map: f => LazyBox(() => f(g())),
    fold: f => f(g())
  });

const result = LazyBox(() => ' 64 ')
  .map(abba => abba.trim())
  .map(trimmed => new Number(trimmed))
  .map(num => num + 1)
  .map(String.fromCharCode)
  .fold(x => x.toLowerCase());

console.log('With LazyBox:', result);
