import { strictFetch } from '../helpers/strictFetch';

async function getFirstUsername() {
  const users = await strictFetch('/users');
  return users[0].name;
}

// Notes:
// `unknown` is the type-safe version of `any`. least-capable type. Anything can be assigned to `unknown` but unknown is only assignable to `any`
// Interface not required. Type guards can also be used
// Array<{ name: string }>
