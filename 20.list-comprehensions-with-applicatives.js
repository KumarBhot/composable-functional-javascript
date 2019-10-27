const { List } = require('immutable-ext');

/**
 * to avoid a nested for loop pattern, like
 * for (x in xs) {
 *  for (y in yx) {
 *    for (x in zx) {
 *    }
 *  }
 * }
 */

const merch = () =>
  List
    .of(x => y => z => `${x}-${y}-${z}`)
    .ap(List(['men', 'women']))
    .ap(List(['sweater', 'jacket', 't-shirt']))
    .ap(List(['black', 'blue', 'white']));

const res = merch();

console.log(res);
