export async function getFirstUsername() {
  const res = await fetch('/users');
  const users = await res.json();
  return users[0].name;
}

// `users` is of `any` type and is way too permissive
// user wouldn't know if they were accessing something that doesn't exist
