/**
  * Use Task for Asynchronous Actions
  *
  */

const Task = require('data.task');
const fs = require('fs');

const readFile = (filename, enc) =>
  new Task((rej, res) =>
    fs.readFile(
      filename,
      enc,
      (err, contents) =>
        err ? rej(err) : res(contents)
    )
  );

const writeFile = (filename, contents) =>
  new Task((rej, res) =>
    fs.writeFile(
      filename,
      contents,
      (err, success) =>
        err ? rej(err) : res(success)
    )
  );

const app =
  readFile('config.json', 'utf-8')
    .map(contents => contents.replace(/8/g, '6'))
    .chain(contents => writeFile('config-copy.json', contents));

app.fork(
  e => console.log(e),
  () => console.log('File read and write success!')
);
