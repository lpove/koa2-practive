const Koa = require('koa');
const app = new Koa();

app.use(async (ctx, next) => {
	let stime = new Date().getTime();
	await next();
	let etime = new Date().getTime();
	// 移交控制权
	ctx.response.type = 'text/html';
	ctx.response.body = '<h1>Hello World</h1>';
	console.log(`请求地址: ${ctx.path}，响应时间：${etime - stime}ms`)
})

app.use(async (ctx, next)=>{
	console.log('中间件 1 doSomething');
	await next();
	console.log('中间件 1 end')
})

app.listen(3000, ()=>{
	console.log('server is running at http://localhost:3000');
})
