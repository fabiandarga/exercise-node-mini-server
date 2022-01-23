import http from 'http';

const server = http.createServer((req, res) => {
    console.log('request received. url:', req.url);
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello World');
    res.end();
});

const port = 4000;
server.listen(port, () => {
    console.log(`Server was started. Listening to http://localhost:${port}`);
});
