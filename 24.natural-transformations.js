const { Right, Left, fromNullable, Either } = require('./either');
const { Box } = require('./box');
const Task = require('data.task');

const eitherToTask = e => e.fold(Task.rejected, Task.of);

eitherToTask(Right('ok')) // or with Left('error')
  .fork(
    console.error,
    console.log
  );

const boxToEither = b => b.fold(x => x ? Right(x) : Left(null));

console.log(boxToEither(Box('squirrles')), boxToEither(Box()));

// Law of Natural Transformations: NT(x).map(f) === NT(x.map(f))

const res1 = boxToEither(Box(100)).map(x => x * 2); // or with Box(null)
const res2 = boxToEither(Box(100).map(x => x * 2)); // or with Box(null)

console.log(res1, res2);

const first = fs => fromNullable(fs[0]);

const res3 = first([1, 2, 3]).map(x => x + 1); // or with []
const res4 = first([1, 2, 3].map(x => x + 1)); // or with []

console.log(res3, res4);

/**
 *
 *         F(a)        map(f)        F(b)
 *            ------------------------>
 *            |                       |
 *            |                       |
 *       nt   |                       |   nt
 *            |                       |
 *            |                       |
 *            \/                      \/
 *            ------------------------>
 *         G(a)        map(f)        G(b)
 *
 */
