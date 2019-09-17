/**
  * Use chain for composable error handling with nested Either
  *
  */

const fs = require('fs');
const { Left, Right } = require('./either');
const configFilePath = 'config.json';

// Imperative style
function imperative () {
  const getPort = () => {
    try {
      const str = fs.readFileSync(configFilePath);
      const config = JSON.parse(str);

      return config.port;
    } catch (e) {
      return 3000;
    }
  };

  const result = getPort();

  return result;
}

console.log(imperative());

// Functional style
function functional () {
  const tryCatch = f => {
    try {
      return Right(f());
    } catch (e) {
      return Left(e);
    }
  };

  const getPort = () =>
    tryCatch(() => fs.readFileSync(configFilePath))
      .chain(str => tryCatch(() => JSON.parse(str)))
      .fold(
        e => e.message,
        config => config.port
      );

  const result = getPort();

  return result;
}

console.log(functional());
