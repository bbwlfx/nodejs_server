'use strict';

const http = require('http');
let ct = 0;
const server = http.createServer(function (req, res) {
	// req是发送过来的请求 res是响应
	let body = '';
	req.on('data', function (thunk) {
		body += thunk;
	})
	req.on('end', function () {
		console.log(body);
		res.writeHead(404, 'success', {
			'Content-Type': 'text/html'
		});
		res.write('alsdjfksf<br>');
		res.write('alsdjfksf<br>');
		res.write('alsdjfksf');

		res.end('<h1>' + body + '</h1>');
	})


})

server.listen(3000);
console.log('server is running');