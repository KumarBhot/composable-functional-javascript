/**
  * Lift into a Pointed Functor with of()
  *
  */

const { Box } = require('./box');
const { Either } = require('./either');

const box = Box.of('chocolates');
const either = Either.of('two');

console.log(box, either);
