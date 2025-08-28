const lodash = require('lodash');

const names = ['habeeb', 'raju', 'ramu'];

const capitalize = lodash.map(names, lodash.capitalize);

console.log(capitalize);

