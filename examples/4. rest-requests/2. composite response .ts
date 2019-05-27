import { strictFetch } from '../helpers/strictFetch';
import { userA, userB, User } from './mock_users';

/*
 * server/users.ts
 */
export type UserListApi = ReturnType<typeof UsersBackendAPI>;
export function UsersBackendAPI() {
  return [userA, userB].map(user => ({
    firstName: user.name,
    age: user.age,
    role: user.age < 30 ? 'admin' : 'web-dev'
  }));
}

/*
 * client/getUsers.ts
 */
export async function getUsers() {
  const users = await strictFetch<UserListApi>('/users');
  const username = users[0].firstName;
}

// Notes:
// Endpoints don't always return "atomic" types
// Endpoints often return composite values (eg. transactions and spans)
// At compile-time we are able to import across application boundaries
