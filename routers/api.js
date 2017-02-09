'use strict';
const render = require('../lib/render.js');
module.exports = function (req, res) {
	let query = req.query;
	if(query.username == 'scarlett' && query.password == '123') {
		res.end(query.username + ' login success!');
	}else {
		res.end('login fail...');
	}
}