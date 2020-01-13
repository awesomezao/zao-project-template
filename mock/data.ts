import * as Mock from 'mockjs';

import { Iuser } from './test';
declare interface Azao {
  b: number;
}

const Random: Mock.MockjsRandom = Mock.Random;
export let testData: Iuser = Mock.mock({
  'user|10': [
    {
      'id|+1': 1123,
      name: '@cname',
      email: '@email',
      avatar: '@image(300x300)',
    }
  ]
});
