export interface User {
  name: string;
  age: number;
  employer: string;
}

export const userA: User = {
  name: 'John Doe',
  age: 22,
  employer: 'Elastic'
};

export const userB: User = {
  name: 'Anders Hejlsberg',
  age: 58,
  employer: 'Microsoft'
};
