const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/greet' && req.method === 'GET') {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<p>Hello, World!</p>');
  } else if (req.url === '/submit' && req.method === 'POST') {
    let body = '';
    req.on('data', (chunk) => {
      body += chunk.toString();
    });
    req.on('end', () => {
      const name = new URLSearchParams(body).get('name');
      res.statusCode = 200;
      res.setHeader('Content-Type', 'text/html');
      res.end(`<p>Hello, ${name}!</p>`);
    });
  } else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Not found');
  }
});

server.listen(3000, () => {
  console.log('Server running at http://localhost:3000/');
});
