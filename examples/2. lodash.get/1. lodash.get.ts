import { get } from 'lodash';

const res = { user: { name: 'John Doe', age: 22 } };
export const username = get(res, 'user.name');

// Notes:
// Always returns `any`
// Stringly typed: No type safety to ensure the accessed props exists
