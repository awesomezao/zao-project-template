import * as Router from 'koa-router';
import {testData} from '../mock/data'

const mockRouter: Router = new Router();

mockRouter.get('/', async (ctx: Router.IRouterContext) => {
  ctx.body = testData
});
mockRouter.post('/', async (ctx: Router.IRouterContext) => {
  ctx.body = testData
});

export default mockRouter
