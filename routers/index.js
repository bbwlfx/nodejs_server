'use strict';
const render = require('../lib/render.js');
module.exports = function (req, res) {
	if(req.cookies['login_info']) {
		render('index.html', res);	
	}else {
		res.statusCode = 302;
		res.setHeader('Location', '/form');
		res.end();
	}
	
}