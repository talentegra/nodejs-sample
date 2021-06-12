const http = require('http');
const port = process.env.PORT || 80;

const server = http.createServer((req, res) => {
	  res.statusCode = 200;
	  const msg = 'Hello Node! Welcome to App Engine v2\n'
	  res.end(msg);
});

server.listen(port, () => {
	  console.log(`Server running on http://localhost:${port}/`);
});
