const { List } = require('immutable-ext');
const { Right, Left, fromNullable } = require('./either');
const { Box } = require('./box');
const Task = require('data.task');

const res1 = List(['hello', 'world'])
  .chain(x => List(x.split('')));

console.log(res1);

const first = xs => fromNullable(xs[0]);
const largeNumbers = xs => xs.filter(x => x > 100);
const larger = x => x * 2;

const app1 = xs => first(largeNumbers(xs)).map(larger);
const app2 = xs => first(largeNumbers(xs).map(larger)); // same, but better here
const nums = [2, 400, 5, 1000];

console.log(app1(nums), app2(nums));

const fake = id => ({ id: id, name: `user${id}`, best_friend: id + 1 });
const Db = {
  find: id => new Task((rej, res) =>
    res(id > 2 ? Right(fake(id)) : Left('not found')))
};
const eitherToTask = et => et.fold(Task.rejected, Task.of);

// instead of Db.find(3).chain(either => either.map(user => Db.find(user.best_friend)))

Db.find(3)
  .chain(eitherToTask)
  .chain(user => Db.find(user.best_friend))
  .chain(eitherToTask)
  .fork(
    console.error,
    console.log
  );
