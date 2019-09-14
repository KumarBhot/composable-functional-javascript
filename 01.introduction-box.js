/**
  * Create linear data flow with container style types
  *
  */

const { Box } = require('./box.js');

// Imperative style
function imperative () {
  const nextCharForNumberString = str => {
    const trimmed = str.trim();
    const number = parseInt(trimmed);
    const nextNumber = number + 1;

    return String.fromCharCode(nextNumber);
  };

  const result = nextCharForNumberString(' 64 ');

  return result;
}

console.log('Imperative: ', imperative());

// Intermediate
function intermediate () {
  const nextCharForNumberString = str => {
    return String.fromCharCode(parseInt(str.trim()) + 1); // unreadable/confusing
  };

  const result = nextCharForNumberString(' 64 ');

  return result;
}

console.log('Intermediate: ', intermediate());

// Functional style
function functional () {
  const Box = x => ({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: () => `Box('${x}')`
  });

  const trim = s => s.trim();
  const addOne = n => n + 1;

  const nextCharForNumberString = str =>
    Box(str)
      .map(trim)
      .map(parseInt)
      .map(addOne)
      .fold(String.fromCharCode);

  const result = nextCharForNumberString(' 64 ');

  return result;
}

console.log('Functional: ', functional());
