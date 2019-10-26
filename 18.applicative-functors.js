const { Box } = require('./box');

// F(x).map(f) === F(f).ap(F(x))

const add = x => y => x + y;
const liftA2 = (f, fx, fy) => fx.map(f).ap(fy);

const res1 = Box(add).ap(Box(2)).ap(Box(3));
const res2 = liftA2(add, Box(2), Box(3));

console.log(res1, res2);
