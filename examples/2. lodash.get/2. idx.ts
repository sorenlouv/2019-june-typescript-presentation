import { idx } from '../helpers/idx';

const res = { user: { name: 'John Doe', age: 22 } };
export const username = idx(res, _ => _.user.age);

// Notes:
// type safety: correct return type and property access checks
// autocompletion
// performance: https://jsperf.com/try-catch-error-perf
// https://github.com/facebookincubator/idx
// Babel transform: https://astexplorer.net/
// Why not optional chaining? Still not ready (stage 1)
