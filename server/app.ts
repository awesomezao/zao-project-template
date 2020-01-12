import * as Koa from 'koa';
import * as Router from 'koa-router';
import mockRouter from './router'

const app = new Koa();

app.use(mockRouter.routes()).use(mockRouter.allowedMethods())

app.listen(3000, () => {
  console.log('mock server is running at http://localhost:3000');
});
