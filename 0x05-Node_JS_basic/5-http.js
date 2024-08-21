/*
* A small HTTP server using the http module
*/
const http = require('http');
const countStudents = require('./3-read_file_async');
const hostname = '127.0.0.1';
const port = 1245;

const app = http.createServer(async (request, response) => {
  response.statusCode = 200;
  if (request.url === '/') {
    response.end('Hello Holberton School!');
  } else if (request.url === '/students') {
    let dbInfo = 'This is the list of our students\n';
    await countStudents(process.argv[2])
      .then((msg) => {
        dbInfo += msg;
        response.end(dbInfo);
      })
      .catch((err) => {
        dbInfo += err.message;
        response.end(dbInfo);
      });
  }
});

app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
