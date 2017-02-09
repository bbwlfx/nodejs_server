'use strict';

function parseCookie (req, res) {
	let cookie = req.headers['cookie'];
	req.cookies = cookie ? cookie.split(';').reduce((ret, tmp) => {
		let arr = tmp.split('=');
		ret[arr[0].trim()] = arr[1].trim();
		return ret;
	}, {}) : {};
}

module.exports = parseCookie;