'use strict';
const render = require('../lib/render.js');
module.exports = function (req, res) {
	render('taobao.html', res);
}