import * as Router from 'koa-router';

const mockRouter: Router = new Router();

mockRouter.get('/', async (ctx: Router.IRouterContext) => {
  ctx.body = {
    time: new Date(),
    data:'mockservice',
  }
});

export default mockRouter
