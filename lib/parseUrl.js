'use strict';
const url = require('url');
function parseUrl (req, res) {
	let obj = url.parse(req.url, true);
	obj = obj || {};
	req.pathName = obj.pathname;
	req.query = obj.query;
}
module.exports = parseUrl;