'use strict';
const render = require('../lib/render.js');
const user = require('../dao/user.js');
module.exports = function (req, res) {
	let query = req.query;
	user.findUserByAccount(query.account).then((ret) => {
		if(ret && ret.password == query.password) {
			res.setHeader('Set-Cookie', 'login_info=yes');
			res.statusCode = 302;
			res.setHeader('Location', '/');
			res.end();
		}else {
			res.end('password error');
		}
	});
	
}