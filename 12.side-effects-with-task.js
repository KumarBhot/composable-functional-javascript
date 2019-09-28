/**
  * Capture side effects in a Task
  *
  */

const Task = require('data.task');

const launchMissile = (rej, res) => {
  console.log("Launching missile!");
  res('Missile');
};

const app = new Task(launchMissile);

app
  .map(x => x + '!')
  .fork(
    e => console.log('err', e),
    x => console.log('success', x)
  );
