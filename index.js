const lodash = require('lodash');

const items = [1, 2, [1, [1, 2]]];
const newItems = lodash.flattenDeep(items);
console.log(items);
console.log(newItems);