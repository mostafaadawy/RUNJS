console.log(process.argv);
const path = require('path');
console.log(path.resolve('index.js'));
console.log(path.normalize('./app//src//util/..'));
console.log(path.join('/app', 'src', 'util', '..', '/index.js'));