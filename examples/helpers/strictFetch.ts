type FetchArgs = Parameters<typeof fetch>;
export async function strictFetch<T = unknown>(...args: FetchArgs): Promise<T> {
  const res = await fetch(...args);
  return res.json();
}
