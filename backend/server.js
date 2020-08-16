const http = require('http');
const process = require('process');

const app = require('./app');

const normalizePort = val => {
    const port = parseInt(val, 10);
    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
return port;
    }
    return false;
};

const port = normalizePort(process.env.PORT || 3000);
app.set('port', port);

const server = http.createServer(app);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe' + address : 'port:' + port;
    console.log('listening on' + bind);
});

server.listen(process.env.PORT || 3000);