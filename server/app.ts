import * as Koa from 'koa';
import * as Router from 'koa-router';
import mockRouter from './router';

const app: Koa = new Koa();
app.use(async (ctx: Koa.Context, next: any) => {
  ctx.set('Access-Control-Allow-Origin', '*')
  ctx.set('Access-Control-Allow-Headers', 'Content-Type,Content-Length,Authorization,Accept,X-Requested-With')
  ctx.set('Access-Control-Allow-Methods', 'PUT,POST,GET,DELETE,OPTIONS')
  ctx.method==='OPTIONS'?ctx.body=200:await next()
})
app.use(mockRouter.routes()).use(mockRouter.allowedMethods());

app.listen(3001, () => {
  console.log('mock server is running at http://localhost:3001');
});
