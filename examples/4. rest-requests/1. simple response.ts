import { strictFetch } from '../helpers/strictFetch';
import { userA, userB, User } from './mock_users';

/*
 * server/users.ts
 */
export function UsersBackendAPI() {
  return [userA, userB];
}

/*
 * client/getUsers.ts
 */
export async function getUsers() {
  const users = await strictFetch<User[]>('/users');
  const username = users[0].name;
}
