import { _2dSwap } from './helpers';

test('This shit should just work', _ => {
  expect(_2dSwap([1, 2, 3], 0, 2)).toBeEqueal([3, 2, 1]);
});
