const http = require('http');

const routes = require('./routes');

const server  = http.createServer(routes);
console.log('Server Stared...');
server.listen(3000);