'use strict';
const url = require('url');

function Eps () {
	this._routers = [];
}
Eps.prototype.use = function (reqPath, fn) {
	this._routers.push({
		path: reqPath,
		fn: fn,
	});
}

Eps.prototype.handle = function (req, res) {
	let cnt = 0;

	while (true) {
		let layer = this._routers[cnt++];
		if(!layer) {
			return false;
		}
		if(req.pathName == layer.path) {
			layer.fn(req, res);
			return true;
		}
	}
}


module.exports = Eps;