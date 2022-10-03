export async function UseStaticPaths<T extends { id: number }>(apiFunc: () => Promise<T[]>) {
  const data: T[] = await apiFunc();

  const paths = data.map((post) => ({
    params: {
      id: post.id.toString()
    }
  }));

  return {
    paths,
    fallback: false
  };
}
