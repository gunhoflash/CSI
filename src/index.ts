import express from 'express';
import http from 'http';

const app = express();
const httpServer = http.createServer(app);
const HTTP_PORT = 2020;

// route
app.get('/', (req, res) => {
	res.send('Hello, world!');
});

// start http server
httpServer.listen(HTTP_PORT);
console.log(`Server listen port ${HTTP_PORT}...`);