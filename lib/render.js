'use strict';
const fs = require('fs');
const path = require('path');
function render(viewFile, res) {
	fs.readFile(path.join(__dirname,'../views/',viewFile),'utf-8', function (err, page) {
		if(err) {
			console.log(err);
			res.statusCode = 500;
			res.end('500');
			return ;
		}
		res.end(page);
	});	
}
module.exports = render;