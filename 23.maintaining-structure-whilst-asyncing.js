const fs = require('fs');
const Task = require('data.task');
const { List, Map } = require('immutable-ext');

const httpGet = (path, params) =>
  Task.of(`${path} results`);

Map({
    home: '/',
    about: '/about-us',
    blog: '/blog'
  })
  .traverse(
    Task.of,
    route => httpGet(route, {})
  )
  .fork(
    console.error,
    console.log
  );
