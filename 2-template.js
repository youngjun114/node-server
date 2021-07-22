const http = require('http');
const ejs = require('ejs');

const name = 'youngjun';
const courses = [
  { name: 'HTML' },
  { name: 'CSS' },
  { name: 'Javascript' },
  { name: 'Node' },
];

const server = http.createServer((req, res) => {
  const url = req.url;
  res.setHeader('Content-Type', 'text/html');
  if (url === '/') {
    ejs
      .renderFile('./template/index.ejs', { name })
      .then((data) => res.end(data))
      .catch(console.error);
  } else if (url === '/courses') {
    ejs
      .renderFile('./template/courses.ejs', { courses })
      .then((data) => res.end(data))
      .catch(console.error);
  } else {
    ejs
      .renderFile('./template/not-found.ejs', { name })
      .then((data) => res.end(data))
      .catch(console.error);
  }
});

server.listen(8080);

