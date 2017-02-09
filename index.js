'use strict';

const http = require('http');
const fs = require('fs');
const url = require('url');
const path = require('path');

const Eps = require('./lib/eps.js');
const parseUrl = require('./lib/parseUrl.js');
const parseCookie = require('./lib/parseCookie.js');

const formRouter = require('./routers/form.js');
const apiRouter = require('./routers/api.js');
const indexRouter = require('./routers/index.js');
const baiduRouter = require('./routers/baidu.js');
const taobaoRouter = require('./routers/taobao.js');
let app = new Eps();
app.use('/', indexRouter);
app.use('/taobao', taobaoRouter);
app.use('/baidu', baiduRouter);
app.use('/form', formRouter); 
app.use('/api', apiRouter);

const static_regexp = /(\.js|\.css)$/;
const server = http.createServer(function (req, res) {
	parseUrl(req, res);
	parseCookie(req, res);
	// 判断是否是静态文件
	if(static_regexp.test(req.pathName)) {
		// 转发静态文件
		serverStatic(req, res);
		return;
	}
	if(app.handle(req, res)) {
		return ;
	}
	res.statusCode = 404;
	res.end('404');
	

})

server.listen(4000);
console.log('server is running');

function serverStatic (req, res) {
	const rs = fs.createReadStream(path.join(__dirname, 'static', req.pathName));
	rs.pipe(res);
}

