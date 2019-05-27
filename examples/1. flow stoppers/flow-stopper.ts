const user = { name: 'John Doe', age: 22 };
const transformedUser = transform(user);

function transform(input: any): any {
  return input;
}

// disallow any rules (eslint and tsc)

export {};
