const { log } = require('console');
const path = require('path');

console.log('Directory name:', path.dirname(__filename));

console.log('File name:', path.basename(__filename));

const joinPath = path.join('/users', 'node', 'projects');

console.log('Joined path:', joinPath);

const normalizePath = path.normalize('/user/.documents/../projects');

log('Normalized path:', normalizePath);